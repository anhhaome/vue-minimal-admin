import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import RugoVue from '@rugo-vn/vue';

import '@rugo-vn/vue/dist/index.css';
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(RugoVue);
app.use(router);
app.mount('#app');
