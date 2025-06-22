FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/tsconfig.json ./

RUN npm install -g prisma
RUN apk add --no-cache openssl

EXPOSE 3000
CMD ["npm", "start"]
