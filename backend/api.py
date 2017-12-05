from flask import Flask
from flask import jsonify
from flask import request, send_from_directory, make_response
import time 
from PIL import Image

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
    city = request.args.get('city', '')
    start = 0
    try:
        delay = int(city)
        print("parsed delay {}".format(delay))
        time.sleep(int(delay))
        start = delay
    except Exception as e:
        print (e)
        


    return jsonify({
        "data": [u(i) for i in range(start,start + 10)]
        })

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('', path)


ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/api/upload', methods=['POST'])
def upload():
    print(request.args)
    print(request.files)

    if 'file' not in request.files:
        return make_response(jsonify({"success": False}), 400)

    file = request.files['file']

    if not allowed_file(file.filename):
        return make_response(jsonify({"success": False, "error": "file type is not allowed"}), 400)        
    

    image = Image.open(file.stream)
    image = image.resize((100, 100))
    image.save("./1.jpg", "JPEG")
    data = jsonify({
        "success": True,
        "data": [
            u(7777),
            u(8888),
        ]
    })

    return make_response(data, 200)

if __name__ == '__main__':
    print("use\n"
          "FLASK_APP=dummy.py python -m flask run\n"
          "instead")
    exit(1)
