import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import joyParse from "@joy/parse";
import joySdk from "@joy/sdk";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(router);
// app.use(joyParse);
app.use(joySdk);
app.use(Antd);
app.mount("#app");
