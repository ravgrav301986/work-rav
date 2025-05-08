# Шаг 1: Билд-стадия (сборка приложения)
FROM ghcr.io/nodejs/node:18-alpine AS builder

# Устанавливаем зависимости для работы с npm и кешируем их
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Копируем только файлы зависимостей для кеширования
COPY package.json package-lock.json* ./

# Устанавливаем зависимости с legacy-флагом
RUN npm ci --legacy-peer-deps --prefer-offline --no-audit

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Шаг 2: Продакшн-стадия
FROM node:18-alpine AS runner
WORKDIR /app

# Устанавливаем зависимости только для production
ENV NODE_ENV production
RUN apk add --no-cache dumb-init

# Копируем необходимые файлы из builder-стадии
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Оптимизации для Next.js
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

# Настройки безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

# Запускаем приложение через dumb-init для правильной обработки сигналов
CMD ["dumb-init", "npm", "start"]