// import { Components } from "";
import Work from "./components/Work";
import WorkView from "./components/WorkView";
import WorkViewComponent from "./components/WorkViewComponent";

const install = function (app) {
    // 注册Work家族组件
    app.component(Work.name, Work);
    app.component(WorkView.name, WorkView);
    app.component(WorkViewComponent.name, WorkViewComponent);
};

export default { install };
