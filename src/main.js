import { createApp } from "vue";
import App from "./App.vue";

import { i18n } from "./locales/index";
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(i18n);

app.mount("#app");
