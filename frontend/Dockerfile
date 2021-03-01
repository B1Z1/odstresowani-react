FROM node:alpine

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN rm -rf .next
RUN rm -rf public
RUN rm -rf node_modules

#RUN npm install --production
RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]
#CMD [ "npm", "run", "dev" ]