FROM node:12-alpine

# install dependencies first, in a different location for easier app bind mounting for local development
RUN mkdir /opt/react-app
WORKDIR /opt/react-app
COPY package.json package-lock.json* ./
RUN npm install
ENV PATH /opt/react-app/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /opt/react-app/app
COPY . .
EXPOSE 4000
# set user to run the thing
USER node
# chmod group writable fgroup 0 for openshift
RUN chgrp -R 0 /opt/react-app/ && chmod -R g+rwX /opt/react-app/

CMD npm start
