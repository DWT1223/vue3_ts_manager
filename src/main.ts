import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(globalRegister).mount('#app')
