#Test stage
FROM node:24 AS test-stage
WORKDIR /usr/src/app
ENV VITE_BACKEND_URL=http://localhost:8080/api
COPY . .
RUN npm ci
RUN npm test
RUN npm run build

#Run stage
FROM node:24
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=test-stage /usr/src/app/dist ./dist
CMD ["serve", "-n", "-l", "4000", "dist"]