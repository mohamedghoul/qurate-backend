FROM node:16.19.0-bullseye-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm ci \ npm cache clean --force

# Bundle app source
COPY . .

# Run the app
CMD [ "npm", "run", "start" ]