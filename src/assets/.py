import json

w = []

with open("src/assets/data.json", "r") as f:
    x = json.loads(f.read())
    for i, value in enumerate(x):
        value["image"] = f"../assets/{i+1}.jpg"
        w.append(value)
     
with open(f.name, 'w') as refile:

    refile.write(( json.dumps(w, indent=4)))
