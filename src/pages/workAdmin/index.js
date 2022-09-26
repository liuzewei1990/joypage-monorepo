import { createApp } from "vue";
// import globalComponents from "@workAdmin/components";
import work from "work";

import router from "./router";
import store from "./store";
import i18n from "./locale";
// import directive from "./directive";
import "./mock";
import App from "./App.vue";
import "@workAdmin/assets/style/global.less";
// import "@workAdmin/api/interceptor";
const app = createApp(App);

app.use(work);
app.use(router);
app.use(store);
app.use(i18n);
// app.use(globalComponents);
// app.use(directive);

app.mount("#app");
