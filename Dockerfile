FROM node:12.2.0-alpine as build

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

CMD [ "npm", "start" ]