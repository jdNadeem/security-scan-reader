FROM node:10
RUN mkdir -p /user/src/app
WORKDIR /user/src/app
COPY package.json /user/src/app
RUN npm cache verify
RUN npm i
COPY . /user/src/app
EXPOSE 5000
CMD ["npm", "start"]