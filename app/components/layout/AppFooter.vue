<template>
  <div class="app-footer">
    <div class="footer-content page-container">
      <p>&copy; {{ new Date().getFullYear() }} Nuxt 4 + Nitro 全栈应用 | 版权所有</p>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  font-size: 0.9rem;
}
</style>
