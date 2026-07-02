# 详细设计文档 (Detailed Design)

## 1. 接口设计 (API Design)

所有后端接口基于 Nitro 服务器引擎，位于 `server/api` 目录。

### 1.1 接口规范
- **URL 前缀**: `/api` (由文件路径自动映射，例如 `server/api/user.get.ts` -> `GET /api/user`)
- **数据格式**: JSON
- **日期格式**: ISO 8601 UTC

### 1.2 核心接口列表

| 接口路径 (Path) | 请求方法 (Method) | 对应的文件 (Source File) | 描述 (Description) |
| :--- | :--- | :--- | :--- |
| `/api/health` | GET | `server/api/health.get.ts` | 健康检查，返回运行时间和时间戳 |
| `/api/info` | GET | `server/api/info.get.ts` | 获取应用基础信息（版本、环境） |

### 1.3 响应结构 (Response Schema)

```typescript
interface ApiResponse<T> {
  status: 'ok' | 'error';
  data?: T;             // 成功时的数据
  error?: {             // 失败时的错误信息
    code: string;
    message: string;
  };
  message?: string;     // 可选的提示消息
  timestamp: string;    // 服务器时间
}
```

---

## 2. 前端组件设计 (Frontend Components)

### 2.1 风格指南
使用 **Element Plus** 作为基础组件库，配合自定义 CSS 变量实现主题定制。
- **主色调**: Sky Blue (#409EFF)
- **字体**: 系统默认无衬线字体

### 2.2 核心组件 (Core Components)

#### 布局组件 (Layouts)
- **AppHeader**: 顶部导航，包含 Logo 和响应式菜单。
  - *特性*: 支持路由激活高亮，移动端适配。
- **AppFooter**: 底部版权和链接区域。

#### 通用组件 (UI)
- **AppInput**: (`app/components/forms/AppInput.vue`)
  - *描述*: 二次封装 ElInput，统一宽度的表单输入框。
  - *Props*: `modelValue`, `placeholder`, `type`

### 2.3 页面设计 (Pages)

- **首页 (index.vue)**
  - *Hero 区域*: 渐变背景 + 核心价值主张 + CTA 按钮。
  - *特性网格*: 展示项目核心优势（Nuxt 4, TS, Docker）。
  - *快速开始*: 步骤条组件展示启动流程。

- **关于页 (about.vue)**
  - *时间轴*: 使用 `el-timeline` 展示项目发展历程。
  - *描述列表*: 使用 `el-descriptions` 展示技术栈版本。

---

## 3. 服务端设计 (Server Design)

### 3.1 中间件 (Middleware)
位于 `server/middleware`，全局拦截请求。
- **日志中间件 (`log.ts`)**: 记录所有进入 `/api` 的请求方法和 URL，便于调试。

### 3.2 工具库 (Utils)
位于 `server/utils` 或 `app/utils` (共享)。
- **formatDate**: 日期格式化。
- **generateId**: 生成唯一 ID (nanoid/uuid)。

---

## 4. 数据库与存储 (Future)
*当前版本暂未集成数据库，以下为预留设计：*
- **ORM**: 计划使用 Prisma 或 Drizzle ORM。
- **数据库**: 推荐 PostgreSQL 或 SQLite (轻量级)。
- **连接方式**: 在 `server/plugins` 中初始化数据库连接。

