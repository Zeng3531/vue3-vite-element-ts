import { createApp } from 'vue'
import App from './App.vue'
// 引用vuex 
import store from './store/index'
// 引用路由
import router from './router/index'

createApp(App).use(store).use(router).mount('#app')
