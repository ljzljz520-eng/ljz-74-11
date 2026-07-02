# 系统架构文档 (Architecture Documentation)

## 1. 整体架构概览

本项目采用 **Nuxt 4 全栈单一架构 (Monolithic)**，基于 Nuxt 4 框架同时提供前端 SSR/CSR 渲染能力和后端 API 服务（由 Nitro 引擎驱动）。系统打包为单个 Docker 容器进行部署，简化了运维复杂度并提升了全栈开发体验。

```mermaid
graph TB
    subgraph "Docker 容器 (my-nuxt-app)"
        direction TB
        subgraph "Nitro Server Engine"
            API[API Routes (/server/api)]
            MW[Middleware (/server/middleware)]
            SSR[SSR Renderer]
        end
        
        subgraph "Vue Application"
            PAGES[Pages & Components]
            STORE[Composables/State]
        end
        
        SSR --> PAGES
        API --> DB[(Database/Mock Data)]
    end
    
    CLIENT[客户端浏览器] -->|HTTP Request (Port 3000)| NITRO_ENTRY[Nitro Entry]
    NITRO_ENTRY -->|/api/*| API
    NITRO_ENTRY -->|Page Request| SSR
    NITRO_ENTRY -->|Static Assets| ASSETS[Static Files]
    
    SSR -->|HTML| CLIENT
    API -->|JSON| CLIENT
```

---

## 2. 技术栈详细说明

### 2.1 核心框架
- **Fullstack Framework**: Nuxt 4.2.2
  - **Frontend Engine**: Vue 3.5+
  - **Backend Engine**: Nitro (Nuxt 内置高性能服务器引擎)
  - **Bundler**: Vite

### 2.2 前端 (Frontend)
- **UI 组件库**: Element Plus 2.13.1 (自动按需引入)
- **开发语言**: TypeScript 5.7+
- **CSS 方案**: Scoped CSS + Element Plus Theming
- **路由**: Vue Router (基于文件系统的自动路由)

### 2.3 后端 (Backend)
- **运行时**: Node.js 20 (Alpine Linux)
- **API 风格**: RESTful (基于文件系统的路由 `server/api`)
- **工具链**: 内置 `h3` HTTP 框架 (更轻量)

### 2.4 基础设施 (Infrastructure)
- **容器化**: Docker
- **编排**: Docker Compose (单服务)
- **基础镜像**: `node:20-alpine`

---

## 3. 目录与模块结构

项目遵循 Nuxt 4 推荐的目录规范，将应用代码和服务器代码清晰分离。

```bash
my-nuxt-app/
├── app/                    # 前端应用核心
│   ├── components/         # UI 组件
│   ├── pages/              # 页面 (对应 URL 路由)
│   ├── layouts/            # 页面布局
│   ├── composables/        # 组合式函数 (状态管理/逻辑复用)
│   ├── assets/             # 静态资源 (图片/字体/CSS)
│   └── plugins/            # 客户端插件
├── server/                 # 后端服务器核心 (Nitro)
│   ├── api/                # API 接口定义
│   │   ├── health.get.ts   # GET /api/health
│   │   └── info.get.ts     # GET /api/info
│   ├── middleware/         # 服务器中间件 (日志/鉴权)
│   └── utils/              # 服务端专用工具函数
├── nuxt.config.ts          # 项目主配置
├── Dockerfile              # 构建描述文件
└── docker-compose.yml      # 部署描述文件
```

---

## 4. 关键流程设计

### 4.1 请求处理流程
1. **统一入口**: 所有请求进入 Docker 容器的 3000 端口。
2. **Nitro 分发**:
   - **API 请求** (`/api/*`): 路由至 `server/api` 下对应的处理函数 (`defineEventHandler`)。
   - **页面请求**: 触发 SSR 渲染流程，Vue 组件在服务端执行，生成 HTML 字符串。
   - **静态资源**: 直接由 Nitro 托管返回。

### 4.2 数据获取 (Data Fetching)
- 使用 Nuxt 内置的 `useFetch` 或 `useAsyncData`。
- **SSR 模式**: 服务端直接调用 API 处理函数（无网络开销）。
- **CSR 模式**: 客户端发起真实 HTTP 请求调用 `/api` 接口。

### 4.3 错误处理
- **API 错误**: 使用 `createError` 抛出异常，Nitro 自动格式化为 JSON 错误响应。
- **页面错误**: 使用 `showError` 或 `NuxtErrorBoundary` 组件捕获 UI 异常。

---

## 5. 部署架构

采用 **单容器全栈部署** 模式，通过 Docker Compose 管理。

- **服务名**: `app`
- **端口**: 映射宿主机 3000 -> 容器 3000
- **健康检查**: 利用内置的 `/api/health` 接口进行存活探测。
- **环境变量**: 通过 `.env` 文件注入运行时配置 (Runtime Config)。
