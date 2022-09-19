import BaseSelect from "./base-select/index.js";
import BaseTable from "./base-table/index.js";
import ModuleForm from "./module-form.async/index.js";
import ModuleTable from "./module-table/index.js";

export const Components = [BaseSelect, BaseTable, ModuleForm, ModuleTable];

export default [
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
