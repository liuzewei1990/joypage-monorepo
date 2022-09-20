import BaseSelect from "./base-select/index.js";
import BaseTable from "./base-table/index.js";
import ModuleForm from "./module-form.async/index.js";
import ModuleTable from "./module-table/index.js";
// 将这里全部做成异步组件，支持正常注册,渲染该组件时才进行异步加载
export const Components = [BaseSelect, BaseTable, ModuleForm, ModuleTable];

export const menuList = [
    {
        title: "基础-下拉组件",
        componentName: BaseSelect.name,
        component: BaseSelect
    },
    {
        title: "基础-表格组件",
        componentName: BaseTable.name,
        component: BaseTable
    },
    {
        title: "模块-表单",
        componentName: ModuleForm.name,
        component: ModuleForm
    },
    {
        title: "模块-机构表格",
        componentName: ModuleTable.name,
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
