# pull official base image
FROM node:16-alpine3.11

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH
ENV PORT 3000

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# add app

# start app
CMD ["npm", "start"]