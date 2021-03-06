FROM nginx:alpine

ARG build_type

WORKDIR /etc/nginx

RUN rm ./conf.d/*

COPY ./${build_type}/default.conf ./conf.d
COPY ./certs ./certs

CMD [ "nginx", "-g", "daemon off;" ]