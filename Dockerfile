# Шаг 1: Билд-стадия
FROM public.ecr.aws/docker/library/node:18-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Шаг 2: Продакшн-стадия
FROM public.ecr.aws/docker/library/node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]