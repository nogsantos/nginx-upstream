FROM node:latest

ENV NODE_ENV=development

WORKDIR /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 3000
