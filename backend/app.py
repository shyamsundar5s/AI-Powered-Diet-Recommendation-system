from flask import Flask
from api.routes import api_blueprint

app = Flask(__name__)
app.register_blueprint(api_blueprint)

@app.route("/")
def home():
    return {"message": "Welcome to the AI-Powered Diet Recommendation System!"}

if __name__ == "__main__":
    app.run(debug=True)
