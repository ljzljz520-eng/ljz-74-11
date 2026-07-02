# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制依赖文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 生产阶段
FROM node:20-alpine AS runner

WORKDIR /app

# 复制构建产物
COPY --from=builder /app/.output ./.output

# 设置环境变量
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", ".output/server/index.mjs"]
