FROM node:12.2.0
RUN npm install
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
ENV NODE_ENV development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . . 
EXPOSE 4200
CMD ng serve
