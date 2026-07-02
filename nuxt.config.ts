// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Nuxt 4 兼容模式
    future: {
        compatibilityVersion: 4
    },

    // 启用开发者工具
    devtools: { enabled: true },

    // 模块配置
    modules: [
        '@element-plus/nuxt'
    ],

    // Element Plus 配置
    elementPlus: {
        importStyle: 'css'
    },

    // TypeScript 配置
    typescript: {
        strict: false,
        typeCheck: false
    },

    // 应用配置
    app: {
        head: {
            title: 'Nuxt 4 全栈应用',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '基于 Nuxt 4 构建的现代化全栈应用' }
            ],
            htmlAttrs: {
                lang: 'zh-CN'
            }
        }
    },

    // 全局 CSS
    css: [
        '~/assets/css/main.css'
    ],

    // 兼容性日期
    compatibilityDate: '2025-01-26'
})
