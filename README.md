# Ember + Flask example

Example of simple Ember frontend interacting with Flask backend.

## How to run

### Running with docker
Build docker image:
```
docker build -f Dockerfile -t ember_flask .
```

Run container:
```
docker run -it --rm -p 5000:5000 ember_flask
```


Now you can access it via browser on `http://localhost:5000/` or 
```
curl http://localhost:5000/
```


### Running without docker in debug mode 

* Install dependencies for backend

* in `backend/`:
```
./run_debug.sh &
```

* install npm

* in `frontend/`:
```
npm install
ember serve --proxy http://localhost:5000
```
Ember will run on port 4200 and use data from localhost:5000. 
Now you can access frontend on 
```
http://localhost:4200
```