import { defineAsyncComponent } from "vue";

const Component = defineAsyncComponent(() => import(/* webpackChunkName: "modele-form.async" */ "./component.vue"));

Component.install = function (Vue) {
    Vue.component(Component.name, Component);
};

export default Component;
