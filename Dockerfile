# Use Node.js 18 Alpine as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package.json package-lock.json* ./

# Install dependencies, force install to avoid any lockfile issues
RUN npm install --force

# Copy the rest of the application files into the container
COPY . .

# Build the Next.js project for production
RUN npm run build

# Expose port 3000 to access the app
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
