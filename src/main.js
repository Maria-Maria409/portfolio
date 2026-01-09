import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./styles/main.css";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";

createApp(App).use(i18n).mount("#app");

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(i18n);

app.mount("#app");
