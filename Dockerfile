FROM node:12-buster as build
RUN yarn global add gatsby-cli
WORKDIR /app
ADD pie-website ./
RUN yarn
RUN gatsby build

#Copy the built website over
FROM nginx:1.19.7
EXPOSE 80

# Configure Nginx for http basic auth
COPY nginx/prod-nginx.conf /etc/nginx/nginx.conf

# Add website contents
COPY --from=build /app/public /usr/share/nginx/html

CMD nginx -g 'daemon off;'
