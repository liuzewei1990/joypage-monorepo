import { default as menuList, Components } from "@joy/components";
import WorkComponent from "./lib/Work.vue";

const install = function (Vue) {
    // 注册解析器组件
    Vue.component(WorkComponent.name, WorkComponent);
    // 注册所有组件
    Components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default { install, menuList };
