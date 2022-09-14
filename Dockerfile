FROM node:14.16.1
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start