import { createApp } from 'vue'
import App from './App.vue'
import '@/style.js'

const app = createApp(App)
// app.config.globalProperties.$api = 'http://localhost:5009'
app.config.globalProperties.$api = 'https://api.jordanistiqlal.my.id'
app.mount('#app')
