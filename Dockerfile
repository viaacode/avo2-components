FROM node:12-alpine

# install dependencies first, in a different location for easier app bind mounting for local development
RUN mkdir /opt/react-app
WORKDIR /opt/react-app
COPY package.json package-lock.json* ./
RUN npm install
#ENV PATH /opt/react-app/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /opt/react-app/app
COPY . .

CMD npm start
