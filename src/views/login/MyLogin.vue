// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>
<script lang="ts" setup name="MyLogin">
// ------------------接收传入参数(组件)-------------------

import { onMounted } from 'vue'

// ------------------钩子函数----------------------------
// 初始化
// eslint-disable-next-line @typescript-eslint/no-empty-function
onMounted(() => {})

// ------------------定义子组件--------------------------

// ------------------变量区------------------------------

// ------------------方法区------------------------------
</script>
<style lang="less" scoped></style>
