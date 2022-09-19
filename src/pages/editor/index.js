import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import joyComponents from "@joy/components";
import joyParse from "@joy/parse";
import joySdk from "@joy/sdk";

createApp(App).use(router).use(joyComponents).mount("#app");
