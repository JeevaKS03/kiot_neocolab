from flask import Flask,render_template,url_for,redirect,request

app=Flask(__name__)
@app.route('/')
def index():
    print(url_for('login'))
    return redirect(url_for('login'))
@app.route("/login")
def login():
    return render_template('index.html')
@app.route("/pwd")
def pwd():
    return render_template("login.html")
@app.route("/content")
def content():
    return "Dashboard"
if __name__=="__main__":
    app.run(debug=True)