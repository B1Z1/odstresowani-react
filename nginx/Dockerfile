FROM nginx:alpine

WORKDIR /etc/nginx

RUN rm ./conf.d/*

COPY ./default.conf ./conf.d

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]