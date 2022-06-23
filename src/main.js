import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";

import MDbPlugin from "./plugins/mdb";
import MDialogPlugin from "./plugins/mdialog";
import MHttpPlugin from "./plugins/mhttp";
import MNotificationPlugin from "./plugins/mnoti";
import MUtilsPlugin from "./plugins/mutils";

import MIonIcon from './components/MIonIcon.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(MDbPlugin);
app.use(MDialogPlugin);
app.use(MHttpPlugin);
app.use(MNotificationPlugin);
app.use(MUtilsPlugin);

app.component('ion-icon', MIonIcon);

app.mount("#app");
