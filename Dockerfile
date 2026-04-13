From node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install
COPY . .
ENV DATABASE_URL="postgresql://praveen:password@db:5432/mydb?schema=public"

RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]
