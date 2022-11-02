<template>
  <div class="nav-header">
    <div class="fold-menu">
      <el-icon v-show="!isFold" @click="handleFoldClick"><Fold /></el-icon>
      <el-icon v-show="isFold" @click="handleFoldClick"><Expand /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Fold,
    Expand
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    margin-top: 14px;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
