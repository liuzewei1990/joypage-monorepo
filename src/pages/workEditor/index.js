import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import joyComponents from "@joy/components";
// import joyParse from "@joy/parse";
import work from "work";
const app = createApp(App);
app.use(router);
app.use(work);
app.mount("#app");
