# Шаг 1: Билд-стадия
FROM public.ecr.aws/docker/library/node:18-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Шаг 2: Продакшн-стадия
FROM ghcr.io/nodejs/node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN apk add --no-cache dumb-init

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]