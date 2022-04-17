import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './sotre/index'

const app = createApp(App)
Router(app)
Store(app)

app.mount('#app')
