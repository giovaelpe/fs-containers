FROM node:24
WORKDIR /usr/src/app
ENV VITE_BACKEND_URL=http://localhost:8080/api
COPY . .
RUN npm ci
CMD ["npm", "run", "dev", "--", "--host"]