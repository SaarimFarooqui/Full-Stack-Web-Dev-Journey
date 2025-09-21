from flask import Flask, jsonify
from flask_cors import CORS   # 🔹 import CORS

app = Flask(__name__)
CORS(app)  # 🔹 allow all origins

@app.route("/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Python Backend!"})

if __name__ == "__main__":
    app.run(debug=True)
