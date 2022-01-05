#Create the node stage
FROM node:latest as builder
#Set the working dir
WORKDIR /app
#Copy the file from the current directory to working directory
COPY . .
#Run npm install build the application
RUN npm install && npm run ng build
#Create the Nginx stage for serving the content

FROM nginx:alpine
#Set the working directory to nginx directory
WORKDIR /usr/share/nginx/html
#Remove the default nginx static files
RUN rm -rf ./*
#Copy the static content from builder stage
COPY --from=builder /app/dist/AngularP .
#Container run the nginx with global directive and Daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]