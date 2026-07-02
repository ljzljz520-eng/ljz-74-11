<template>
  <div class="app-wrapper">
    <el-container>
      <el-header height="60px">
        <LayoutAppHeader />
      </el-header>
      
      <el-main>
        <slot />
      </el-main>
      
      <el-footer height="60px">
        <LayoutAppFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.el-main {
  background-color: var(--app-bg-color);
  padding: 20px;
  min-height: calc(100vh - 120px);
}

.el-footer {
  background-color: #fff;
  border-top: 1px solid #dcdfe6;
  padding: 0;
}
</style>
