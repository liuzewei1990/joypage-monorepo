import debug from "./env";

export default (opts) => {
    if (opts.mock !== false && debug) opts.setup();
};

export const successResponseWrap = (data) => {
    return {
        data,
        status: "ok",
        msg: "请求成功",
        code: 20000
    };
};

export const failResponseWrap = (data, msg, code = 50000) => {
    return {
        data,
        status: "fail",
        msg,
        code
    };
};
