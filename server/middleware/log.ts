export default defineEventHandler((event) => {
    // 记录请求日志
    console.log(`[${new Date().toISOString()}] ${event.method} ${event.path}`)
})
