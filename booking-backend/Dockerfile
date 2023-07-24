FROM node:18.17-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm i -g @nestjs/cli
RUN npm run build
CMD [ "node", "dist/main.js" ]