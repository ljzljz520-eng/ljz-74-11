<template>
  <div class="about-page page-container">
    <!-- 头部横幅 -->
    <div class="about-hero">
      <div class="hero-content">
        <h1 class="bounce-in">关于本项目</h1>
        <p class="fade-in">探索 Nuxt 4 与 Nitro 结合的无限可能</p>
      </div>
    </div>

    <el-row :gutter="40" class="content-section">
      <!-- 左侧：项目介绍与愿景 -->
      <el-col :xs="24" :md="14">
        <div class="section-block intro-block">
          <h2><el-icon><DataBoard /></el-icon> 项目愿景</h2>
          <p>
            本项目旨在打造一个<strong>现代化、高性能、可扩展</strong>的全栈脚手架模板。通过整合 Nuxt 4 的服务端渲染能力与 Nitro 的高性能服务引擎，为开发者提供开箱即用的企业级开发体验。
          </p>
          <p>
            我们秉持"配置即代码"与"容器化优先"的理念，确保项目在任何环境下都能保证一致的运行表现。
          </p>
          
          <div class="stats-row">
            <div class="stat-item">
              <span class="count">100%</span>
              <span class="label">全容器化</span>
            </div>
            <div class="stat-item">
              <span class="count">全栈</span>
              <span class="label">核心架构</span>
            </div>
            <div class="stat-item">
              <span class="count">秒开</span>
              <span class="label">渲染性能</span>
            </div>
          </div>
        </div>

        <div class="section-block roadmap-block">
          <h2><el-icon><TrendCharts /></el-icon> 开发路线</h2>
          <el-timeline>
            <el-timeline-item timestamp="2026/01/24" placement="top" type="primary" hollow>
              <h4>项目初始化</h4>
              <p>完成 Nuxt 4 全栈基础结构搭建</p>
            </el-timeline-item>
            <el-timeline-item timestamp="2026/01/25" placement="top" type="success">
              <h4>Docker 容器化</h4>
              <p>实现前后端分离部署与服务编排</p>
            </el-timeline-item>
            <el-timeline-item timestamp="未来计划" placement="top">
              <h4>更多功能</h4>
              <p>计划集成数据库与用户认证模块</p>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>

      <!-- 右侧：技术栈详情 -->
      <el-col :xs="24" :md="10">
        <div class="section-block tech-block">
          <h2><el-icon><Cpu /></el-icon> 核心技术栈</h2>
          <div class="tech-cards">
            <el-card shadow="hover" class="tech-card">
              <template #header>
                <div class="tech-header">
                  <span class="tech-name">Nuxt 4</span>
                  <el-tag size="small" effect="dark">前端框架</el-tag>
                </div>
              </template>
              <p class="tech-desc">极致的 Vue 框架，提供 SSR、自动路由与模块化配置。</p>
            </el-card>

            <el-card shadow="hover" class="tech-card">
              <template #header>
                <div class="tech-header">
                  <span class="tech-name">Nitro</span>
                  <el-tag size="small" type="success" effect="dark">后端服务</el-tag>
                </div>
              </template>
              <p class="tech-desc">Nuxt 内置的下一代服务器引擎，提供极致的性能与部署灵活性。</p>
            </el-card>

            <el-card shadow="hover" class="tech-card">
              <template #header>
                <div class="tech-header">
                  <span class="tech-name">Element Plus</span>
                  <el-tag size="small" type="primary" effect="dark">UI组件库</el-tag>
                </div>
              </template>
              <p class="tech-desc">基于 Vue 3 的组件库，提供精致的设计与交互体验。</p>
            </el-card>

            <el-card shadow="hover" class="tech-card">
              <template #header>
                <div class="tech-header">
                  <span class="tech-name">Docker</span>
                  <el-tag size="small" type="info" effect="dark">部署运维</el-tag>
                </div>
              </template>
              <p class="tech-desc">全链路容器化，保障开发与生产环境的一致性。</p>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { DataBoard, TrendCharts, Cpu } from '@element-plus/icons-vue'
</script>

<style scoped>
.about-page {
  padding-bottom: 40px;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #00DC82 0%, #36E4DA 100%);
  border-radius: 16px;
  padding: 60px 40px;
  margin-bottom: 40px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 220, 130, 0.2);
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Content Layout */
.section-block {
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
/*  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); */
}

.section-block h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #303133;
  border-bottom: 1px solid #EBEEF5;
  padding-bottom: 12px;
}

.section-block p {
  line-height: 1.8;
  color: #606266;
  margin-bottom: 16px;
  font-size: 1rem;
}

/* Stats */
.stats-row {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-item {
  text-align: center;
}

.stat-item .count {
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: #409EFF;
}

.stat-item .label {
  font-size: 0.9rem;
  color: #909399;
}

/* Tech Cards */
.tech-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tech-card {
  border: none;
  background: #fcfcfc;
  transition: transform 0.2s;
}

.tech-card:hover {
  transform: translateY(-2px);
}

.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tech-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.tech-desc {
  font-size: 0.9rem;
  color: #606266;
  margin: 0;
}

/* Animations */
.bounce-in {
  animation: bounceIn 1s ease;
}

.fade-in {
  animation: fadeIn 1.5s ease;
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
