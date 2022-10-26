import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import '@/service/axios_demo'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(globalRegister).mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
