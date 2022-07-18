import { createApp } from 'vue';
import { createAdminPlugin, MDbPlugin, MDialogPlugin, MHttpPlugin, MIonIcon, MNotificationPlugin, MUtilsPlugin } from '@rugo-vn/vue';

import logoOnly from "./assets/images/logo-only.svg";
import textOnly from "./assets/images/text-only.svg";

import App from './App.vue';
import router from './router';

// rugo
import '@rugo-vn/vue/dist/style.css';

const admin = createAdminPlugin({
  logo: {
    icon: logoOnly,
    text: textOnly
  }
});

// application
const app = createApp(App);

app.component('IonIcon', MIonIcon);

app.use(admin);
app.use(router);

app.use(MDbPlugin);
app.use(MDialogPlugin);
app.use(MHttpPlugin);
app.use(MNotificationPlugin);
app.use(MUtilsPlugin);

app.mount('#app');
