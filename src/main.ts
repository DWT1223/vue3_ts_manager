import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
import store, { setupStore } from './store'
// dwtAxiosDemo样例演示
// import '@/service/DWTAxiosDemo'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

createApp(App).use(router).use(store).use(globalRegister).mount('#app')
setupStore()
