<script setup>
//用户执行的命令
const userCommand = (command) => {
  //点击菜单触发的回调
  console.log('command:', command)
}
</script>

<template>
  <div class="navCantainer">
    <div>
      <h3>垂直导航-默认展开和自定义样式</h3>
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="width: 200px"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Search /></el-icon>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Edit /></el-icon>
          <template #title>导航二</template>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Search /></el-icon>
            <span>导航三</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>
    </div>

    <div>
      <h3>下拉菜单</h3>
      <br />
      <el-dropdown @command="userCommand">
        <span>
          个人中心<el-icon><User /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="order">订单</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.navCantainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
