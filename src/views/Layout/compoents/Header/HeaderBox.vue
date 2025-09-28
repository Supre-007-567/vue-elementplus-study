<script setup>
const menuMap = {
  '/button': '按钮',
  '/icon': 'icon',
  '/message': '确认框',
  '/tag': '标签页',
}
const emit = defineEmits(['selected'])
const selected = (index) => {
  console.log('当前选中文字:', menuMap[index])
  emit('selected', menuMap[index])
}
</script>

<template>
  <el-header>
    <!-- horizontal ;水平导航 -->
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="selected"
    >
      <el-menu-item class="logo">ElementPlus-Study</el-menu-item>
      <el-sub-menu index="1">
        <template #title>基础组件</template>
        <el-menu-item index="/button">按钮</el-menu-item>
        <el-menu-item index="/icon">icon</el-menu-item>
        <el-menu-item index="/message">确认框</el-menu-item>
        <el-menu-item index="/tag">标签页</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </el-header>
</template>

<style scoped>
.el-header {
  padding: 50px;
}
.logo {
  font-style: italic;
  user-select: none; /* 禁止用户选择文本，也就无法复制 */
  font-weight: 700;
}
</style>
