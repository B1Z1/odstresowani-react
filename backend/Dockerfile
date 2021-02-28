FROM strapi/base

WORKDIR /srv/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN chmod 755 /src/app

EXPOSE 1337

CMD ["yarn", "start"]
#CMD ["yarn", "develop"]
