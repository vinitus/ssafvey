# Use the official Node.js image as the base image
FROM node:18.13-alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application files
COPY . .
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS="--max-old-space-size=4096"
# Build the React project
RUN npm run build
# Add start script
RUN echo "npm start" > start.sh && chmod +x start.sh
# Specify the command to run when the container starts
CMD ["./start.sh"]