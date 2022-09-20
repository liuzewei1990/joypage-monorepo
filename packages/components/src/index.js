import { defineAsyncComponent } from "vue";
const BaseSelect = defineAsyncComponent(() => import(/* webpackChunkName: "base-select" */ "./base-select/index.vue"));
const BaseTable = defineAsyncComponent(() => import(/* webpackChunkName: "base-table" */ "./base-table/index.vue"));
const ModuleForm = defineAsyncComponent(() => import(/* webpackChunkName: "module-form" */ "./module-form.async/index.vue"));
const ModuleTable = defineAsyncComponent(() => import(/* webpackChunkName: "module-table" */ "./module-table/index.vue"));

export const Components = [
    {
        title: "基础-下拉组件",
        name: "base-select",
        component: BaseSelect
    },
    {
        title: "基础-表格组件",
        name: "base-table",
        component: BaseTable
    },
    {
        title: "模块-表单",
        name: "module-form",
        component: ModuleForm
    },
    {
        title: "模块-机构表格",
        name: "module-table",
        component: ModuleTable
    }
];

const install = function (Vue) {
    // 注册所有组件
    Components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default { install };
