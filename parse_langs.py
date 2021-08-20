import json

with open("languages.json", encoding="utf8") as f:
    data = json.load(f)

for key in data:
    value = data[key]
    name = value["name"]
    print('<option value="{}">{}</option>'.format(key, name))
