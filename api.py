from app import app

@app.route('/api/test')
def test():

    return "api test"



