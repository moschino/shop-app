FROM node:21-alpine

RUN mkdir -p /home/shop-app

WORKDIR /home/shop-app

COPY . /home/shop-app

RUN npm install

# EXPOSE 3000

CMD ["npm", "start"]
