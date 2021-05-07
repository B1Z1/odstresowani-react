FROM staticfloat/nginx-certbot

ARG build_type

WORKDIR /etc/nginx

RUN rm ./conf.d/*

COPY ./${build_type}/default.conf ./conf.d

CMD [ "nginx", "-g", "daemon off;" ]