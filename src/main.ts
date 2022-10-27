import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import router from './router'
import store from './store'
// dwtAxiosDemo样例演示
// import '@/service/DWTAxiosDemo'

createApp(App).use(router).use(store).use(globalRegister).mount('#app')
