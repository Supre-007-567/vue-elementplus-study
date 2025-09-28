<script setup>
import Header from './compoents/Header/HeaderBox.vue'
</script>

<template>
  <div class="common-layout layout">
    <!-- 垂直布局容器 -->
    <el-container direction="vertical">
      <Header></Header>
      <!-- 头部：自适应内容高度 -->
      <el-main>
        <!-- 主体：占满剩余空间 -->
        <router-view></router-view>
      </el-main>
      <el-footer>此网页归SupreCoder所属</el-footer>
      <!-- 底部：自适应内容高度 -->
    </el-container>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh; /* 根容器占满整个视口高度 */
}

.el-container {
  height: 100%; /* 容器继承父高度，确保垂直方向可分配空间 */
  flex-direction: column; /* 垂直排列子元素 */
}

/* 头部：不设置高度，由内容撑开 */
.el-header {
  /* 移除 flex-grow 等拉伸属性，仅保留必要样式 */
  padding: 0;
}

/* 主体：关键！占满剩余所有空间 */
.el-main {
  flex-grow: 1; /* 自动填充剩余高度 */
  margin: 0; /* 去除默认边距（如果有） */
  overflow: visible; /* 允许内容溢出容器（不裁剪） */
}

/* 底部：不设置高度，由内容撑开 */
.el-footer {
  text-align: center;
  letter-spacing: 2px;
  /* 仅保留内容相关样式，不设置固定高度 */
}
</style>
