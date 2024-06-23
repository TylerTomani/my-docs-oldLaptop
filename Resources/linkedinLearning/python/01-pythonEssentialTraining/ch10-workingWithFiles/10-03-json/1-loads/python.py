import json
jsonString = '{"a":"apple","b":"bear","c":"cat"}'
jsonDict = json.loads(jsonString)
print(jsonDict)