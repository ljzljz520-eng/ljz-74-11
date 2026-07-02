# Nuxt 4 全栈应用

基于 Nuxt 4 构建的现代化全栈应用，集成了 Element Plus UI 组件库，支持 Docker 一键部署。

## 📚 项目文档

- [🏗 系统架构 (Architecture)](docs/architecture.md)
- [📐 详细设计 (Design)](docs/design.md)
- [💻 开发指南 (Development)](docs/development.md)
- [🧪 测试报告 (Testing)](docs/testing.md)
- [📖 用户手册 (Manual)](docs/manual.md)

## 🛠 技术栈

- **前端**: Nuxt 4.2.2, Vue 3.5, Element Plus 2.13
- **后端**: Nitro 服务器引擎（内置于 Nuxt）
- **基础设施**: Docker, Docker Compose

## 🚀 快速启动

### 前置要求
- Node.js 20+ 或 Docker Desktop

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### Docker 部署

```bash
docker compose up --build -d
```

## 🔗 服务地址

- **前端页面**: http://localhost:3000
- **健康检查**: http://localhost:3000/api/health
- **应用信息**: http://localhost:3000/api/info

## 📦 项目结构

```
my-nuxt-app/
├── app/                    # 应用核心目录（Nuxt 4 风格）
│   ├── components/         # 自动导入的 Vue 组件
│   │   ├── ui/             # 通用 UI 组件（按钮、卡片等）
│   │   ├── forms/          # 表单相关组件
│   │   └── layout/         # 布局相关组件
│   ├── composables/        # 组合式函数（自动导入）
│   ├── pages/              # 页面路由
│   ├── layouts/            # 布局组件
│   ├── middleware/         # 路由中间件
│   ├── plugins/            # 插件（自动注册）
│   ├── utils/              # 工具函数（推荐自动导入）
│   ├── types/              # TypeScript 类型定义
│   ├── assets/             # 资源文件
│   │   ├── css/
│   │   ├── images/
│   │   └── fonts/
│   └── public/             # 静态文件
├── server/                 # 服务器端
│   ├── api/                # API 路由
│   ├── middleware/         # 服务器中间件
│   └── utils/              # 服务器工具函数
├── components/             # 全局组件（兼容传统位置）
├── composables/            # 全局组合函数
├── node_modules/
├── .nuxt/                  # Nuxt 生成文件（请勿手动修改）
├── .output/                # 构建输出
├── nuxt.config.ts          # Nuxt 配置
├── package.json
├── tsconfig.json           # TypeScript 配置
├── eslint.config.js        # ESLint 配置
├── .env                    # 环境变量
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 💡 开发说明

详细开发流程请参考 [开发指南](docs/development.md)。

### 注意事项
- 本项目采用 Nuxt 4 全栈架构，前后端代码在同一项目中
- 所有 API 路由位于 `server/api/` 目录
- 使用 Nitro 引擎处理服务端逻辑
- `app/` 目录下的组件、composables、utils 会自动导入
