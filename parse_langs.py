import json

with open("languages.json", encoding="utf8") as f:
    data = json.load(f)

print(data["translation"])
