# 开发指南 (Development Guide)

## 1. 环境准备

确保您的本地环境满足以下要求：
- **Node.js**: v18.0.0 或更高版本 (推荐 v20 LTS)
- **包管理器**: npm (v9+) 或 pnpm
- **编辑器**: VS Code (推荐安装 Volar, ESLint 插件)

## 2. 项目安装与启动

```bash
# 1. 克隆项目 (假设已下载)
cd my-nuxt-app

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

启动成功后，访问 `http://localhost:3000`。开发服务器支持热重载 (HMR)，修改代码后浏览器会自动刷新。

## 3. 常见开发任务

### 3.1 在 Nuxt 4 中创建新页面
在 `app/pages` 目录下创建 Vue 文件即可自动生成路由。
- 创建 `app/pages/users.vue` -> 路由 `/users`
- 创建 `app/pages/users/[id].vue` -> 动态路由 `/users/:id`

### 3.2 创建后端 API
在 `server/api` 目录下创建文件。
- 创建 `server/api/users.get.ts` -> 处理 `GET /api/users` 请求
- 创建 `server/api/users.post.ts` -> 处理 `POST /api/users` 请求

**示例代码 (server/api/demo.get.ts):**
```typescript
export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nitro!'
  }
})
```

### 3.3 使用组件
将组件放入 `app/components` 目录，即可在页面中直接使用，无需 import。
例如 `app/components/MyCard.vue` -> `<MyCard />`

## 4. 代码规范

- **TypeScript**: 全面使用 TS 进行开发，尽量避免 `any`。
- **Linting**: 运行 `npm run lint` (需配置脚本) 检查代码风格。
- **风格**: 使用 Composition API (`<script setup>`)。

## 5. 构建与部署

### 5.1 本地构建预览
```bash
npm run build
npm run preview
```

### 5.2 Docker 部署 (生产环境)
```bash
# 构建并后台运行
docker compose up --build -d

# 查看日志
docker compose logs -f
```
