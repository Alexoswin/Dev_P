# Use an official Node.js base image with a specific version
FROM node:14

# Set a working directory
WORKDIR /app

# Copy your project files into the container
COPY . /app

# Install project dependencies
RUN npm install 

# Expose a port if your application requires it
EXPOSE 3000

# Define the command to run your Node.js application
CMD ["node", "main.js"]

