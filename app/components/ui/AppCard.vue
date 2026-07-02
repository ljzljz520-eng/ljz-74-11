<template>
  <el-card shadow="hover" class="app-card">
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <slot />
  </el-card>
</template>

<style scoped>
  .app-card {
    border-radius: 8px;
    transition: all 0.3s ease;
  }
</style>
