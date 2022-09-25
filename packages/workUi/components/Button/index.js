import * as Vue from "vue";
const _Button = Vue.defineAsyncComponent(() => import(/* webpackChunkName: "async" */ /* webpackPrefetch:true */ "./component.vue"));

const Button = Object.assign(_Button, {
    install: (app) => {
        app.component(_Button.name, _Button);
    }
});

export default Button;
