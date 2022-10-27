<template>
  <el-form label-width="60px" :rules="phoneRules" :model="phone" ref="phoneFormRef">
    <el-form-item label="手机号" prop="phoneNum" label-width="100">
      <el-input v-model="phone.phoneNum" />
    </el-form-item>
    <el-form-item label="验证码" prop="phoneCode" label-width="100">
      <div class="get-code">
        <el-input v-model="phone.phoneCode" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

import { phoneRules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      phoneNum: localCache.getCache('phoneNum') ?? '',
      phoneCode: localCache.getCache('phoneCode') ?? ''
    })

    const phoneFormRef = ref<InstanceType<typeof ElForm>>()

    const phoneloginAction = (isKeepPassword: boolean) => {
      phoneFormRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记电话号码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('phoneNum', phone.phoneNum)
          } else {
            localCache.deleteCache('phoneNum')
          }
          // const phoneNum = localCache.getCache('phoneNum')
          // console.log(phoneNum)

          // 2.开始进行登录验证
          // store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      phone,
      phoneloginAction,
      phoneRules,
      phoneFormRef
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
  width: 100px;
}
</style>
