import time, re, requests

#   Calls the Reddit API to get an OAUTH2 access token.
#   Returns a dictionary for the HTTP header.
#   The dictionary contains the 'User-Agent' and 'Authorization' headers.
def requestAccessToken():
    
    #   Read an external file to get the information concerning the Reddit account and the Reddit application made for the project.
    developer_file = open("reddit_developer_account.txt")
    developer_file_info = developer_file.read().split('\n')
    developer_file.close()

    #   Set the information read from the external file to local variables so that the HTTP headers and HTTP data dictionaries can be made.
    app_ID = developer_file_info[0]
    app_secret = developer_file_info[1]
    username = developer_file_info[2]
    password = developer_file_info[3]

    #   Create the HTTP components necessary to request an OAUTH2 access token for the Reddit API.
    http_authorization = requests.auth.HTTPBasicAuth(app_ID, app_secret)
    http_headers = {'User-Agent' : 'Python:To The Moon:v1.0.0 (by /u/' + username + ')'}
    http_data = {'grant_type' : 'password', 'username' : username, 'password' : password}  

    #   Send a POST request with the necessary HTTP components to the Reddit API to get an access token. 
    access_token_response = requests.post('https://www.reddit.com/api/v1/access_token', auth=http_authorization, headers=http_headers, data=http_data)

    #   Add the 'Authorization' header with the value of the access token onto the existing HTTP header dictionary 
    #   so that the Reddit API methods can now be called.
    http_headers.update({'Authorization': 'bearer ' + access_token_response.json()['access_token']})

    return http_headers

#   Runs immediately after the Cloud Function is called by the Pub/Sub and Cloud Scheduler.
#   Scrapes the most popular Reddit posts from r/wallstreetbets for stock symbols.
#   Calls the Alpha Vantage API to get the stock company name and the most recent closing price for each scraped stock symbol.  
def main(event, context):

    scraped_stock_symbols = []   
    scraped_stocks_closing_prices = []
    scraped_stocks_company_names = []

    token_http_headers = requestAccessToken()
    
    #   Specifies to the Reddit API to collect up to the top 100 (most upvoted) posts in descending order within the last day.
    top_post_parameters = {'limit': 100, 'time': 'day'}

    #   Sends a GET request to retrieve the top posts from r/wallstreetbets.
    top_wsb_posts_response  = requests.get('https://oauth.reddit.com//r/wallstreetbets/top', params=top_post_parameters, headers=token_http_headers)
    
    #   Breaks down the JSON data from the Reddit API response so that the list of top posts can be retrieved and iterated through.
    top_wsb_posts = top_wsb_posts_response.json()['data']['children']

    #   Determines if a string is a stock symbol based on a regular expression.
    stock_symbol_pattern = '[$][A-Z]{1,4}'

    #   Iterates through every top post.
    for wsb_post in top_wsb_posts:

        post_title = str(wsb_post['data']['title'])
        post_text = str(wsb_post['data']['selftext'])

        #   Gets a list of stock symbols found in the title or text of a top post.
        stock_symbols_found = re.findall(stock_symbol_pattern, post_title + ' ' + post_text)

        #   Makes sure the list of stock symbols found is not empty.
        if len(stock_symbols_found) != 0:

            #   Iterates through each stock symbol found in the post.
            for stock_symbol in stock_symbols_found:

                #   Removes the stock symbol from the list if the stock symbol has more than four letter after the '$' symbol.
                if len(stock_symbols_found) > 5:
                    stock_symbols_found.remove(stock_symbol)

                #   Removes a stock symbol from the list if it appears more than once in the list.
                if stock_symbols_found.count(stock_symbol) != 1:
                    stock_symbols_found.remove(stock_symbol)

                #   Adds the stock symbol without the '$' character to the list of the three most mentioned stock symbols.
                if stock_symbol[1:] not in scraped_stock_symbols and len(scraped_stock_symbols) != 3:
                    scraped_stock_symbols.append(stock_symbol[1:])

    #   Opens and reads an external file that contains API key information for Alpha Vantage API access.
    stock_API_key_file = open('alpha_vantage_API_key.txt')
    stock_API_key = stock_API_key_file.read()
    stock_API_key_file.close()

    list_index = 1

    #   Iterates through the top 3 scraped stock symbols.
    for stock_symbol in scraped_stock_symbols:

        overview_parameters = {'function': 'OVERVIEW', 'symbol': stock_symbol, 'apikey': stock_API_key}

        #   Sends a GET request to the Alpha Vantage API to get the company name based on the stock symbol
        stock_company_info_response = requests.get('https://www.alphavantage.co/query', params=overview_parameters)

        #   Makes sure the stock symbol is recognized by Alpha Vantage API
        if stock_company_info_response.status_code == 200:

            #   Adds the company name of the stock symbol to the list of scraped stocks' company names.
            if 'Name' in stock_company_info_response.json():
                scraped_stocks_company_names.append(str(stock_company_info_response.json()['Name']))

            #   Handles the case where a stock doesn't have a company name. 
            else:
                scraped_stocks_company_names.append(str(stock_symbol))

            intraday_parameters = {'function': 'TIME_SERIES_INTRADAY', 'symbol': stock_symbol, 'interval': '60min', 'apikey': stock_API_key}

            #   Sends a GET request to the Alpha Vantage API to retrieve stock information about stock symbol.
            stock_price_info_response = requests.get('https://www.alphavantage.co/query', params=intraday_parameters)

            #   Retrieves the closing price of the stock symbol on the most recent stock trading day.
            stock_last_refreshed_datetime = stock_price_info_response.json()['Meta Data']['3. Last Refreshed']
            stock_closing_price = stock_price_info_response.json()['Time Series (60min)'][stock_last_refreshed_datetime]['4. close']

            #   Rounds the closing price to two decimals and adds the closing price to the list of scraped stocks' prices.
            stock_closing_price_two_decimals = '{:.2f}'.format(float(stock_closing_price))
            scraped_stocks_closing_prices.append(float(stock_closing_price_two_decimals))

        #   Deletes the scraped stock symbol from the scraped stocks list if Alpha Vantage does not recognized the stock symbol.
        else:
            scraped_stock_symbols.remove(stock_symbol)
            list_index -= 1

        list_index += 1

        #   Since the Alpha Vantage API limits how many free requests can be made per a minute, the program will be stopped every 60 seconds 
        #   for every scraped stock symbol so that there will be no monetary costs for using the Alpha Vantage API.
        #   For the last scraped stock, this skips the process of stopping the program since there are no further requests that need to be made
        #   to the Alpha Vantage API. 
        if list_index != len(scraped_stock_symbols):
            time.sleep(60)

    backend = 'http://34.27.166.78:8080'

    json_data = []

    list_index = 0

    #   Adds each scraped stock to the JSON list. 
    while list_index < len(scraped_stock_symbols):
        json_data.append({ 'name': scraped_stocks_company_names[list_index], 'symbol': scraped_stock_symbols[list_index], 'value': scraped_stocks_closing_prices[list_index]})
        list_index += 1

    #   Outputs the JSON data onto the command line terminal.
    print(json_data)

    #   Sends a POST request containing the JSON list of the scraped stocks to the backend.
    requests.post(backend + '/api/update-stocks/ HTTP/1.1', json=json_data) 
