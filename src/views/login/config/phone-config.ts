// 编写好规则
export const phoneRules = {
  phoneNum: [
    {
      required: true,
      message: '手机号是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11位数字~',
      trigger: 'blur'
    }
  ],
  phoneCode: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{4}$/,
      message: '用户名必须是4位的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
