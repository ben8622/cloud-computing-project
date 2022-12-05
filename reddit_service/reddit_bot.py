import re, requests

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

#   Scrapes the most popular Reddit posts from r/wallstreetbets for stock symbols.
#   Calls the Alpha Vantage API to get the last closing price for each scraped stock symbol.   
def main():

    scraped_stock_symbols = []   
    scraped_stocks_closing_prices = []

    #   Calls the Reddit API to get an OAUTH2 access token.
    token_http_headers = requestAccessToken()
    
    #   Specifies to the Reddit API to collect the top 100 (most upvoted) posts within the last day.
    top_post_parameters = {'limit': 100, 'time': 'day'}

    #   Sends a GET request to retrieve the top posts from r/wallstreetbets.
    top_wsb_posts_response  = requests.get('https://oauth.reddit.com//r/wallstreetbets/top', params=top_post_parameters, headers=token_http_headers)
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

                #   Removes a stock symbol from the list if it appears more than once in the list.
                if stock_symbols_found.count(stock_symbol) != 1:
                    stock_symbols_found.remove(stock_symbol)

                #   Adds the stock symbol to the list of the three most mentioned stock symbols.
                if stock_symbol not in scraped_stock_symbols and len(scraped_stock_symbols) != 3:
                    scraped_stock_symbols.append(stock_symbol)

    #   Opens and reads an external file that contains API key information for Alpha Vantage API access.
    stock_API_key_file = open('alpha_vantage_API_key.txt')
    stock_API_key = stock_API_key_file.read()
    stock_API_key_file.close()

    #   Iterates through the top 3 scraped stock symbols.
    for stock_symbol in scraped_stock_symbols:

        query_parameters = {'function': 'TIME_SERIES_INTRADAY', 'symbol': stock_symbol[1:], 'interval': '60min', 'apikey': stock_API_key}

        #   Sends a GET request to the Alpha Vantage API to retrieve stock information about stock symbol.
        stock_info_response = requests.get('https://www.alphavantage.co/query', params=query_parameters)

        #   Checks whether the Alpha Vantage API recognized the stock symbol.
        if stock_info_response.status_code == 200:

            #   Retrieves the closing price of the stock symbol on the most recent stock trading day.
            stock_last_refreshed_datetime = stock_info_response.json()['Meta Data']['3. Last Refreshed']
            stock_closing_price = stock_info_response.json()['Time Series (60min)'][stock_last_refreshed_datetime]['4. close']
            stock_closing_price_two_decimals = '{:.2f}'.format(float(stock_closing_price))
            scraped_stocks_closing_prices.append(stock_closing_price_two_decimals)
    
    print(scraped_stock_symbols)
    print(scraped_stocks_closing_prices)

main()