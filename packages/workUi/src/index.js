import "../components/index.less";
import * as Components from "../components/index.js";
const install = function (app) {
    for (const key in Components) {
        app.component(key, Components[key]);
    }
};

export { install };
