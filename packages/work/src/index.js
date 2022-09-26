import WorkUi from "work-ui";
import Work from "./components/Work";
import WorkView from "./components/WorkView";
import WorkViewComponent from "./components/WorkViewComponent";

import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

const install = function (app) {
    // 注册Work家族组件
    app.component(Work.name, Work);
    app.component(WorkView.name, WorkView);
    app.component(WorkViewComponent.name, WorkViewComponent);

    // 注册arco-design组件库
    app.use(ArcoVue);
    app.use(ArcoVueIcon);

    // 注册work-ui 组件包
    app.use(WorkUi);
};

export default { install };
