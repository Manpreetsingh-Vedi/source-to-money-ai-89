
# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production stage - using nginx:alpine-slim for a more lightweight image
FROM nginx:alpine-slim

# Copy built files from build stage to nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Add nginx configuration with HTTPS, IP detection, and gzip compression
RUN echo 'server { \
  listen 80; \
  \
  # Redirect HTTP to HTTPS \
  return 301 https://$host$request_uri; \
} \
\
server { \
  listen 443 ssl; \
  \
  # SSL certificates \
  ssl_certificate /etc/nginx/ssl/cert.pem; \
  ssl_certificate_key /etc/nginx/ssl/key.pem; \
  \
  # IP detection and redirection \
  if ($host ~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$) { \
    return 301 https://letaimakemoney.com$request_uri; \
  } \
  \
  location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html; \
  } \
  \
  # Enable gzip compression for text files \
  gzip on; \
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; \
  gzip_min_length 1000; \
}' > /etc/nginx/conf.d/default.conf

# Create directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Expose ports
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
