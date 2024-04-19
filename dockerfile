FROM node:20.12.2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:stable
COPY --from=build /app/dist/project1/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "demon off;"]