# Build App
FROM node:18 AS build

WORKDIR /app

COPY ["package.json", "package-lock.json", "."]

RUN npm install

COPY . .

RUN npm run build

# Generate runtime
FROM nginx:alpine

COPY --from=build app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx",  "-g", "daemon off;"]