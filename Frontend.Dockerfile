### STAGE 1: Build ###
FROM node:16.10-alpine AS build

# Define work directory in our container
WORKDIR /frontend

# Copy files to the container work directory
COPY frontend/package.json frontend/package-lock.json ./

# Install all the packages
RUN npm install

# Copy frontend directory from our machine to container work directory
COPY frontend .

# Build frontend to be ready for production deployment
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

# Use nginx configuration file and put it as a config file for container nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy dist file which contains production-ready application
# and put it in container's html directory to be served by nginx
COPY --from=build /frontend/dist /usr/share/nginx/html

#COPY --from=build /frontend /copiedfrontend
