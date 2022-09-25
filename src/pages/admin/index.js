import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import joySdk from "@joy/sdk";

const app = createApp(App);
app.use(router);
app.use(joySdk);
app.mount("#app");
