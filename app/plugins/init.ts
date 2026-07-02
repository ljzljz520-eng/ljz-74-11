/**
 * 插件：全局初始化
 */
export default defineNuxtPlugin((nuxtApp) => {
    // 应用初始化逻辑
    console.log('[插件] 应用已初始化')

    // 可以在这里注入全局方法或状态
    return {
        provide: {
            appName: 'Nuxt 4 全栈应用',
            appVersion: '1.0.0'
        }
    }
})
