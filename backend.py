import requests, json, sys

username = sys.argv[1]

response = requests.get('https://www.instagram.com/{}/?__a=1'.format(username))
raw_data = response.content.decode("utf-8") 
raw_data = json.loads(raw_data)
graph_request = raw_data['graphql']
user_content = graph_request['user']

# User Contents

name = user_content['full_name']
bio = user_content['biography'].encode( errors='replace')
followers = user_content['edge_followed_by']['count']
follows = user_content['edge_follow']['count']
profile_hd = user_content['profile_pic_url_hd']
details = [name, bio, followers, follows, profile_hd]
details = [(str(x)) for x in details]
details = " , ".join(details)
print(repr(details))


# user_data_dict = {
#     'name' : user_content['full_name'],
#     'bio' : user_content['biography'],
#     'followers' : user_content['edge_followed_by']['count'],
#     'follows' : user_content['edge_follow']['count'],
#     'profile_hd' : user_content['profile_pic_url_hd'],
# }

