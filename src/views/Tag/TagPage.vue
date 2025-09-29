<script setup>
import { ref } from 'vue'

const activeName = ref('user')
const activeName2 = ref('user2')
const activeName3 = ref('user3')
const activeName4 = ref('user')

const handleClick = (tab, event) => {
  console.log(tab.props.name, event)
}

const tabArr = ref([
  {
    name: 'user',
    title: '用户',
    content: '用户内容',
  },
  {
    name: 'order',
    title: '订单',
    content: '订单内容',
  },
  {
    name: 'role',
    title: '角色',
    content: '角色内容',
  },
  {
    name: 'my',
    title: '我的',
    content: '我的内容',
  },
])

const handleRemove = (name) => {
  console.log('del', name)
  tabArr.value = tabArr.value.filter((item) => {
    return item.name !== name
  })
}

const handelAdd = () => {
  tabArr.value.push({
    name: +new Date(),
    title: '选项卡' + (tabArr.value.length + 1),
    content: '选项卡' + (tabArr.value.length + 1),
  })
}
</script>

<template>
  <div class="tagPage">
    <div class="baseTab">
      <h3>基础标签页</h3>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <!-- v-model="activeName" 默认选中的标签 -->
        <el-tab-pane label="用户" name="user">User</el-tab-pane>
        <el-tab-pane label="订单" name="order">Order</el-tab-pane>
        <el-tab-pane label="角色" name="role">Role</el-tab-pane>
        <el-tab-pane label="我的" name="my">My</el-tab-pane>
      </el-tabs>
    </div>
    <div class="cardTab">
      <h3>卡片标签页</h3>
      <!-- type="card" -->
      <el-tabs v-model="activeName2" class="demo-tabs" @tab-click="handleClick" type="card">
        <el-tab-pane label="用户" name="user2">User</el-tab-pane>
        <el-tab-pane label="订单" name="order2">Order</el-tab-pane>
        <el-tab-pane label="角色" name="role2">Role</el-tab-pane>
        <el-tab-pane label="我的" name="my2">My</el-tab-pane>
      </el-tabs>
    </div>
    <div class="border-cardTab">
      <h3>边框卡片标签页</h3>
      <!-- type="card" -->
      <el-tabs v-model="activeName3" class="demo-tabs" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="用户" name="user3">User</el-tab-pane>
        <el-tab-pane label="订单" name="order3">Order</el-tab-pane>
        <el-tab-pane label="角色" name="role3">Role</el-tab-pane>
        <el-tab-pane label="我的" name="my3">My</el-tab-pane>
      </el-tabs>
    </div>

    <div class="dynamic-cardTab">
      <h3>动态标签页</h3>
      <!-- closable可动态删除按钮 -->
      <el-button @click="handelAdd">添加</el-button>
      <el-tabs v-model="activeName4" @tab-remove="handleRemove" closable type="card">
        <el-tab-pane
          v-for="item in tabArr"
          :label="item.title"
          :name="item.name"
          :key="item.name"
          >{{ item.content }}</el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.tagPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 50px;
}

.baseTab {
  grid-column: 1/2;
}

.cardTab {
  grid-column: 2/3;
}

.baseTab,
.cardTab {
  grid-row: 1/2;
}
.border-cardTab {
  grid-column: 1/2;
}
.border-cardTab,
.dynamic-cardTab {
  grid-row: 2/3;
}

.dynamic-cardTab {
  grid-column: 2/3;
}
</style>
