/**
 * 全局类型定义
 */

// API 响应基础结构
export interface ApiResponse<T = any> {
    status: 'ok' | 'error'
    data?: T
    message?: string
    timestamp: string
}

// 健康检查响应
export interface HealthResponse {
    status: string
    uptime: number
    timestamp: string
}

// 应用信息响应
export interface InfoResponse {
    name: string
    version: string
    description: string
    environment: string
}

// 用户信息（示例）
export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    createdAt: Date
}
