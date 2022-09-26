import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 导入work包
import work from "work";

const app = createApp(App);
app.use(router);
app.use(work);
app.mount("#app");
