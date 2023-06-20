import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { ROUTES } from './constants'

import RugoVue from './plugin.js'
import './tailwind.css'

const app = createApp(App)
app.use(RugoVue)
app.use(
  createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: ROUTES
  })
)
app.mount('#app')
