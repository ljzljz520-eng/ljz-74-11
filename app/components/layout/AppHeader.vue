<template>
  <div class="app-header">
    <div class="header-content page-container">
      <div class="logo">
        <el-icon :size="32" color="#409eff"><ElementPlus /></el-icon>
        <span class="title">Nuxt 4 + Nitro 全栈应用</span>
      </div>
      
      <div class="nav-menu">
        <el-menu mode="horizontal" :ellipsis="false" :router="true" :default-active="$route.path">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElementPlus } from '@element-plus/icons-vue'
</script>

<style scoped>
.app-header {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #303133;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: flex-end; /* 导航靠右 */
}

.el-menu {
  border-bottom: none !important;
  background: transparent;
  height: 60px; /* 与 header 高度一致 */
}

.el-menu-item {
  font-size: 16px;
  color: #606266;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

/* 选中高亮和下划线效果 */
.el-menu-item.is-active {
  color: #409eff !important;
  border-bottom: 2px solid #409eff !important;
  background-color: transparent !important;
}

.el-menu-item:hover {
  background-color: transparent !important;
  color: #409eff;
}
</style>
