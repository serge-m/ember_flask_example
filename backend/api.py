from flask import Flask
from flask import jsonify
from flask import request, send_from_directory

app = Flask(__name__, static_url_path='')


@app.route('/')
def root():
    return send_from_directory('static', "index.html")

def u(user_id):
    return {
        "type": "users",
        "id": user_id,
        "attributes": {
            "info": "data" + str(user_id),
        },
        
    }

@app.route('/api/users/<user_id>')
def users_by_id(user_id):
    return jsonify({"data": u(user_id)})

@app.route('/api/users')
def users():
    return jsonify({
        "data": [u(i) for i in range(0,10)]
        })

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('', path)


if __name__ == '__main__':
    print("use\n"
          "FLASK_APP=dummy.py python -m flask run\n"
          "instead")
    exit(1)
