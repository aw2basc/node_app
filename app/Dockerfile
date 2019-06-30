FROM node:boron

# Add Tini
ENV TINI_VERSION v0.14.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# node user
USER node

# create app dir
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# npm
COPY ../package.json /home/node/app
RUN npm install --silent --progress-false

# copy app
COPY . /home/node/app

# port app is running on
EXPOSE 3000

CMD [ "npm", "start" ]
