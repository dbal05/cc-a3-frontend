FROM node:12.2.0
ENV NODE_ENV development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install -g @angular/cli
COPY . . 
CMD ng serve --host 0.0.0.0 