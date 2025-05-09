FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run pri:g
RUN npm run build

FROM node:22 AS production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN npm install -g pm2

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

#CMD ["npm", "run", "start:prod"]
CMD ["pm2-runtime", "start", "dist/src/main.js", "--env", "prod"]