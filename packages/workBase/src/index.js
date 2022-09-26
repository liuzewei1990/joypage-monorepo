import array from "lodash/array";

const install = function (app) {
    app.config.globalProperties["$workApi"] = {};
    app.config.globalProperties["$workUtils"] = {};
};

export default { install };
