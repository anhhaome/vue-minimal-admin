import { createApp } from 'vue'
import App from './App.vue'

import RugoVue from './plugin.js'
import './tailwind.css'

const app = createApp(App)
app.use(RugoVue)
app.mount('#app')
