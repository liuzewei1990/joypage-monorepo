import { defineAsyncComponent } from "vue";
const BaseSelect = defineAsyncComponent(() => import(/* webpackChunkName: "base-select" */ /* webpackPrefetch:true */ "./base-select/index.vue"));
const BaseTable = defineAsyncComponent(() => import(/* webpackChunkName: "base-table" */ /* webpackPrefetch:true */ "./base-table/index.vue"));
const ModuleForm = defineAsyncComponent(() => import(/* webpackChunkName: "module-form" */ /* webpackPrefetch:true */ "./module-form/index.vue"));
const ModuleTable = defineAsyncComponent(() => import(/* webpackChunkName: "module-table" */ /* webpackPrefetch:true */ "./module-table/index.vue"));

export const Components = [
    {
        title: "基础-下拉组件",
        icom: "",
        type: "组件类型",
        visible: true,
        name: "base-select",
        component: BaseSelect
    },
    {
        title: "基础-表格组件",
        icom: "",
        type: "组件类型",
        visible: true,
        name: "base-table",
        component: BaseTable
    },
    {
        title: "模块-表单",
        icom: "",
        type: "组件类型",
        visible: true,
        name: "module-form",
        component: ModuleForm
    },
    {
        title: "模块-机构表格",
        icom: "",
        type: "组件类型",
        visible: true,
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
