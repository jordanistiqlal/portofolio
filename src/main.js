import { createApp } from 'vue'
import App from './App.vue'
import '@/style.js'

const app = createApp(App)
app.config.globalProperties.$api = process.env.VUE_APP_MAIN_API
app.mount('#app')