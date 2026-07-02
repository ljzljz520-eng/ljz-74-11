/**
 * app 目录下的组合函数：使用 API 请求
 */
export function useApi() {
    const fetchHealth = async () => {
        return await $fetch('/api/health')
    }

    const fetchInfo = async () => {
        return await $fetch('/api/info')
    }

    return {
        fetchHealth,
        fetchInfo
    }
}
