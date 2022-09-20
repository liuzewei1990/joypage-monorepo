import { defineAsyncComponent } from "vue";

const asyncComponent = defineAsyncComponent(() => import(/* webpackChunkName: "base-select" */ "./component.vue"));

export default {
    name: "base-select",
    asyncComponent
};
