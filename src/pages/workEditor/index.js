import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import joyComponents from "@joy/components";
// import joyParse from "@joy/parse";
import * as workUi from "work-ui";
console.log(workUi);
const app = createApp(App);
app.use(router);
app.use(workUi);
app.mount("#app");
