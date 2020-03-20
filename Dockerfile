# Base Image 
FROM node:12-alpine3.11
# Working directory 
RUN apk add --no-cache nodejs npm

WORKDIR /app
# copy package.json to the app direcory created
COPY . /app
# run install command
RUN npm install

EXPOSE 5000

# copy the rest of the soource files
# COPY . /app
# run npm start
CMD ["npm", "start"]
