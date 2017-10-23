from app import app

@app.route('/api/test')
def test():

    print("Calling test api")

    dbString = ""

    with open("database.txt") as f:
        content = f.readlines()
        content = [x.strip() for x in content]


        dbString = "<br>".join(content)


        
    return dbString



