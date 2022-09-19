import { default as MenuList, Components } from "@joy/components";
import Work from "./lib/Work.vue";

const install = function (Vue) {
    // 注册解析器组件
    Vue.component(Work.name, Work);
    // 注册所有组件
    Components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default { install, ...Components };
