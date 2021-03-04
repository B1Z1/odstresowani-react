FROM strapi/base

WORKDIR /srv/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN rm -rf .cache
RUN rm -rf build
RUN rm -rf node_modules

RUN yarn install

COPY . .

RUN yarn build

RUN chmod 755 /srv/app
