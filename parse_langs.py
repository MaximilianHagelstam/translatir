import json

with open("languages.json", encoding="utf8") as f:
    data = json.load(f)


translation = data["translation"]

for key in translation:
    value = data[key]
    # print("The key and value are ({}) = ({})".format(key, value))
    print(key)

# print(data["translation"]["af"])
