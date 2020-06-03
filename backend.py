import requests, json

ip = input("User ID \n")

response = requests.get('https://www.instagram.com/{}/?__a=1'.format(ip))
raw_data = response.content.decode("utf-8") 
raw_data = json.loads(raw_data)
graph_request = raw_data['graphql']
user_content = graph_request['user']

# User Contents

name = user_content['full_name']
bio = user_content['biography']
followers = user_content['edge_followed_by']['count']
follows = user_content['edge_follow']['count']
profile_hd = user_content['profile_pic_url_hd']
det = [name, bio, followers, follows]
print(profile_hd)

print(det)