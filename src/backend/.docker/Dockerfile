FROM node:18.9-alpine as base

# Create an app directory
WORKDIR /usr/src/app

# Copy files - ignores files from .dockerignore file.
COPY . .

# ================================= #
# 🐳🐳       DEV BUILD       🐳🐳 #
# ================================= #
FROM base as dev
ENV NODE_ENV=development

# Npm install packages.
RUN npm i

# Nodemon Entrypoint.
CMD ["npm", "run", "dev"]

# ================================= #
# 🐳🐳   [1/2] PROD BUILD    🐳🐳 #
# ================================= #
FROM base as prod-build

# Npm install typescript for build command.
RUN npm i typescript@4.9.5

# Convert typescript code to JavaScript.
RUN npm run build

# ================================= #
# 🐳🐳       [2/2] PROD      🐳🐳 #
# ================================= #
FROM node:18.9-alpine as prod
ENV NODE_ENV=production

WORKDIR /app

# Npm install packages. Omits dev dependencies when NODE_ENV=production
COPY --from=prod-build /usr/src/app/package.json ./package.json
RUN npm i

# Copy build files.
COPY --from=prod-build /usr/src/app/build .

# Node Entrypoint.
CMD ["node","index.js"]
