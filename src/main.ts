import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'windi.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
app.mount('#app')
