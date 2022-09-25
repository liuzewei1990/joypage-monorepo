import * as Vue from "vue";
const _BaseSelect = Vue.defineAsyncComponent(() => import(/* webpackChunkName: "async" */ /* webpackPrefetch:true */ "./component.vue"));

const BaseSelect = Object.assign(_BaseSelect, {
    install: (app) => {
        app.component(_BaseSelect.name, _BaseSelect);
    }
});

export default BaseSelect;
