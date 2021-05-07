FROM staticfloat/nginx-certbot

ARG build_type

WORKDIR /etc/nginx

RUN rm ./conf.d/*

COPY ./${build_type}/default.conf /etc/nginx/user.conf.d:ro

CMD [ "nginx", "-g", "daemon off;" ]