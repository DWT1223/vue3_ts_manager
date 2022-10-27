// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="login">
    login
  </div>
</template>
<script lang="ts" setup name="MyLogin">
// ------------------接收传入参数(组件)-------------------

import { onMounted } from 'vue'

// ------------------钩子函数----------------------------
// 初始化
onMounted(() => {})

// ------------------定义子组件--------------------------

// ------------------变量区------------------------------

// ------------------方法区------------------------------
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>
