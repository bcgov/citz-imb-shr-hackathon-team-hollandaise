FROM node:18.9-alpine as base

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18.9-alpine as production
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port that the application will listen on
EXPOSE 3000

# Command to run the application
CMD [ "node", "dist/index.js" ]
