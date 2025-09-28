<script setup>
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

const openMsg = () => {
  ElMessage({
    type: 'success',
    message: 'hello elementPlus',
    showClose: true,
  })
}

const openConfirm = () => {
  ElMessageBox.confirm('确认删除？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  })
    .then(() => {
      console.log('确认')
    })
    .catch(() => {
      console.log('取消')
    })
}

const openNotice1 = () => {
  ElNotification({
    title: '标题',
    message: 'hello element',
    duration: 1500,
  })
}

const openNotice2 = () => {
  ElNotification({
    type: 'success',
    title: '标题',
    message: 'hello element',
    duration: 1500,
    position: 'bottom-right',
  })
}
</script>

<template>
  <div>
    <h3>消息框</h3>
    <el-button @click="openMsg">消息</el-button>
    <el-button @click="openConfirm">删除</el-button>
    <el-button @click="openNotice1">通知1</el-button>
    <el-button @click="openNotice2">通知2</el-button>
  </div>
</template>

<style scoped></style>
