FROM node:12.2.0
RUN npm install
RUN npm install -g @angular/cli
ENV NODE_ENV development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . . 
EXPOSE 4200
CMD ng serve
