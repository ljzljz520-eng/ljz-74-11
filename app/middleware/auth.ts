/**
 * 路由中间件：身份验证示例
 */
export default defineNuxtRouteMiddleware((to, from) => {
    // 示例：检查是否需要身份验证
    // const isAuthenticated = false
    // if (!isAuthenticated && to.path !== '/login') {
    //   return navigateTo('/login')
    // }

    console.log(`[中间件] 路由跳转: ${from.path} -> ${to.path}`)
})
