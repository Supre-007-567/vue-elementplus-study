<script setup>
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const route = useRoute()
//默认选中的菜单索引
// const selectedIndex = ref('2-2')
// const selectedIndex = ref("3")

//选中菜单触发的回调
// const selected = (index, indexPath) => {
//   console.log('index', index, 'indexPath', indexPath)
//   router.push(index)
// }
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
    >
      <el-menu-item>ElementPlus-Study</el-menu-item>
      <el-sub-menu index="1">
        <template #title>基础组件</template>
        <el-menu-item index="/button">按钮</el-menu-item>
        <el-menu-item index="/icon">icon</el-menu-item>
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

<style scoped></style>
