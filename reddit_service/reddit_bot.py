import requests

def main():
    
    #   Read an external file to get the information concerning the Reddit account and the Reddit application made for the project.
    developer_file = open("developer_info.txt")
    developer_file_info = developer_file.read().split('\n')
    developer_file.close()

    #   Set the read information to local variables that will be used for HTTP headers and HTTP data.
    app_ID = developer_file_info[0]
    app_secret = developer_file_info[1]
    username = developer_file_info[2]
    password = developer_file_info[3]

    #   Create the HTTP components necessary to request an OAUTH2 access token for the Reddit API.
    http_authorization = requests.auth.HTTPBasicAuth(app_ID, app_secret)
    http_headers = {'User-Agent' : 'Python:To The Moon:v1.0.0 (by /u/' + username + ')'}
    http_data = {'grant_type' : 'password', 'username' : username, 'password' : password}  

    #   Make a POST request to the Reddit API in order to request an access token.
    access_token_response = requests.post('https://www.reddit.com/api/v1/access_token', auth=http_authorization, headers=http_headers, data=http_data)

    #   Add the 'Authorization' header onto the previous HTTP header tag so that Reddit API methods can now be called.
    http_headers.update({'Authorization': 'bearer ' + access_token_response.json()['access_token']})

    #   Make API request to return information about the Reddit account that is being used for the bot. 
    profile_info_response = requests.get('https://oauth.reddit.com/api/v1/me', headers=http_headers)
    print('Information about the Reddit account that is used for this project.')
    print(profile_info_response.json())

main()