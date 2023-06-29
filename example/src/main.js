import './style.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import { ROUTES } from './constants.js';

const app = createApp(App);
app.use(
  createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: ROUTES
  })
);
app.mount('#app');
