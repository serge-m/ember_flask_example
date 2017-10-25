FROM ubuntu:latest 
MAINTAINER sbmatyunin@gmail.com 

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip

ENV LANG=C.UTF-8


ADD frontend/ /opt/frontend
ADD backend/ /opt/backend

WORKDIR /opt

RUN pip install -r ./backend/requirements.txt