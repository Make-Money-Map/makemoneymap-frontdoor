# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* yarn.lock* ./ 
RUN npm install --frozen-lockfile --prefer-offline

# Copy all necessary files
COPY . .

# Build the Next.js project
RUN npm run build

# Stage 2: Production Image
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV production

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --force --frozen-lockfile --prefer-offline --production

# Copy built files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
