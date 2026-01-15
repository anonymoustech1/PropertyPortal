from flask import (
    Flask, render_template, request, redirect,
    url_for, session, flash, jsonify
)

from flask_cors import CORS   # 👈 allows React to talk to Flask
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import URLSafeTimedSerializer

from flask_mysqldb import MySQL 
import MySQLdb.cursors
app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Udechukwu2002.'
app.config['MYSQL_DB'] = 'login_activity'

mysql = MySQL(app)



@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    print(data)
    return jsonify({"message": f"User {username} registered!"})




# @app.route("/api/signup", methods=["POST"])
# def signup():
#     data = request.json
#     print("Received:", data)  # for debugging

#     # pretend we saved to DB...
#     return jsonify({
#         "status": "success",
#         "message": f"User {data.get('name')} registered as {data.get('role')}"
#     })
if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Flask runs on port 5000