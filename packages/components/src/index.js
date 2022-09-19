import BaseSelect from "./base-select/index.js";
import BaseTable from "./base-table/index.js";
import ModuleForm from "./module-form.async/index.js";
import ModuleTable from "./module-table/index.js";

const Components = [BaseSelect, BaseTable, ModuleForm, ModuleTable];

const install = function (Vue) {
    Components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default { install, ...Components };
