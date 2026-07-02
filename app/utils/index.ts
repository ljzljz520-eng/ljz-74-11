/**
 * 工具函数：格式化日期
 */
export function formatDate(date: Date, format = 'YYYY-MM-DD'): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
}

/**
 * 工具函数：生成唯一 ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * 工具函数：深拷贝对象
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}
