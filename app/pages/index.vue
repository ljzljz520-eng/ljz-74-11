<template>
  <div class="home-page page-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="bounce-in">构建下一代 Web 应用</h1>
        <p class="fade-in">基于 Nuxt 4 全栈框架，打造极致性能与开发体验</p>
        <div class="hero-actions fade-in-up">
          <UiAppButton type="primary" size="large" @click="$router.push('/about')">开始探索</UiAppButton>
          <UiAppButton size="large" class="secondary-btn" @click="openDocs">阅读文档</UiAppButton>
        </div>
      </div>
      <div class="hero-image slide-in-right">
        <el-icon :size="200" color="rgba(255,255,255,0.2)"><Platform /></el-icon>
      </div>
    </div>

    <!-- Feature Highlights -->
    <div class="section-header">
      <h2>为什么选择我们？</h2>
      <p>集成了现代 Web 开发所需的最佳实践与工具链</p>
    </div>

    <el-row :gutter="30" class="features-row">
      <el-col :xs="24" :sm="8" v-for="(feature, index) in features" :key="index">
        <div class="feature-card-wrapper" :style="{ animationDelay: `${index * 0.1}s` }">
          <el-card shadow="hover" class="feature-card">
            <div class="feature-icon" :style="{ background: feature.bg }">
              <el-icon :size="32" :color="feature.color">
                <component :is="feature.icon" />
              </el-icon>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!-- Quick Start Steps -->
    <div class="steps-section">
      <div class="section-header">
        <h2>快速上手</h2>
        <p>只需三步，即可启动您的全栈应用</p>
      </div>
      <el-steps :active="1" align-center finish-status="success">
        <el-step title="环境准备" description="安装容器环境与 Node.js" />
        <el-step title="一键启动" description="容器一键预览" />
        <el-step title="开始开发" description="享受热重载开发体验" />
      </el-steps>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Lightning, Connection, Platform } from '@element-plus/icons-vue'

const openDocs = () => {
  window.open('https://nuxt.com/docs', '_blank')
}

const features = [
  { 
    title: '极致性能', 
    desc: '基于 Nuxt 4 服务器端渲染（SSR），首屏加载高度优化，搜索引擎优化（SEO）更友好。', 
    icon: Lightning,
    color: '#E6A23C',
    bg: '#FDF6EC'
  },
  { 
    title: '现代化 UI', 
    desc: '预置 Element Plus 组件库，遵循极致设计规范，提供美观易用的界面体验。', 
    icon: Monitor,
    color: '#409EFF',
    bg: '#ECF5FF'
  },
  { 
    title: '全栈开发', 
    desc: '集成 Nitro 高性能服务器引擎，前后端无缝衔接，支持完整的接口开发流程。', 
    icon: Connection,
    color: '#67C23A',
    bg: '#F0F9EB'
  }
]
</script>

<style scoped>
.home-page {
  padding-bottom: 60px;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #409EFF 0%, #36D1DC 100%);
  border-radius: 20px;
  padding: 60px 80px;
  margin-bottom: 60px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(64, 158, 255, 0.2);
}

.hero-content {
  z-index: 2;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.secondary-btn :deep(button) {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  color: white !important;
}

.secondary-btn :deep(button):hover {
  background: rgba(255, 255, 255, 0.3) !important;
}

.hero-image {
  position: absolute;
  right: -20px;
  bottom: -40px;
  transform: rotate(-15deg);
}

/* Feature Section */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #303133;
  margin-bottom: 12px;
}

.section-header p {
  color: #909399;
  font-size: 1.1rem;
}

.features-row {
  margin-bottom: 80px;
}

.feature-card {
  border: none;
  border-radius: 12px;
  text-align: center;
  padding: 20px;
  height: 100%;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 15px;
  color: #303133;
}

.feature-card p {
  color: #606266;
  line-height: 1.6;
}

.feature-card-wrapper {
  animation: fadeInUp 0.8s ease backwards;
}

/* Steps Section */
.steps-section {
  background: #fff;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Animations */
.bounce-in { animation: bounceIn 1s cubic-bezier(0.215, 0.610, 0.355, 1.000); }
.fade-in { animation: fadeIn 1.5s ease; }
.fade-in-up { animation: fadeInUp 1s ease 0.5s backwards; }
.slide-in-right { animation: slideInRight 1s ease; }

@keyframes bounceIn {
  0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
  20% { transform: scale3d(1.1, 1.1, 1.1); }
  40% { transform: scale3d(0.9, 0.9, 0.9); }
  60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
  80% { transform: scale3d(0.97, 0.97, 0.97); }
  100% { opacity: 1; transform: scale3d(1, 1, 1); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 40px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(100px) rotate(-15deg); }
  to { opacity: 1; transform: translateX(0) rotate(-15deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 20px;
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content h1 { font-size: 2.2rem; }
  .hero-actions { justify-content: center; }
  .hero-image { display: none; }
}
</style>
