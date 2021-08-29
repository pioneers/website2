FROM node:12-buster AS build
ARG CONTENTFUL_API_KEY

RUN yarn global add gatsby-cli
WORKDIR /app

ADD pie-website/package-lock.json package-lock.json
ADD pie-website/package.json package.json

RUN npm install

ADD pie-website ./

RUN npm run build

#Copy the built website over
FROM nginx:1.21.1
EXPOSE 80

# Configure Nginx for http basic auth
COPY nginx/prod-nginx.conf /etc/nginx/nginx.conf

# Add website contents
COPY --from=build /app/public /usr/share/nginx/html
#
CMD nginx -g 'daemon off;'
