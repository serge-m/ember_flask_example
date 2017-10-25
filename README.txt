# Ember + Flask example

Example of simple Ember frontend interacting with Flask backend.

## How to run

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