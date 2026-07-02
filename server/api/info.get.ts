export default defineEventHandler((event) => {
    return {
        status: 'ok',
        data: {
            name: 'Nuxt 4 + Nitro 全栈应用',
            version: '1.0.0',
            description: '基于 Nuxt 4 和 Nitro 构建的现代化全栈应用',
            environment: process.env.NODE_ENV || 'development'
        },
        message: '应用信息获取成功',
        timestamp: new Date().toISOString()
    }
})
