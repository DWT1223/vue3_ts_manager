<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
