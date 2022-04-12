# base image
From node:16.8

# create & set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start