FROM amd64/node:lts-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM amd64/nginx:latest
COPY --from=build /app/dist/cenarium /usr/share/nginx/html
EXPOSE 80