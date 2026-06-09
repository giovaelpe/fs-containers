FROM node:24
WORKDIR /usr/src/app
ENV MONGO_URL=mongodb://the_username:the_password@mongo:27017/the_database?authSource=the_database
ENV REDIS_URL=redis://redis:6379
COPY . .
RUN npm install
CMD ["npm", "run", "dev", "--", "--host"]