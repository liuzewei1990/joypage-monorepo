const modules = require.context("./modules", false, /\.js$/);
const externalModules = require.context("./externalModules", false, /\.js$/);

function formatModules(files = {}, result) {
    files.keys().forEach((key) => {
        const defaultModule = files(key).default;
        if (!defaultModule) return;
        const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule];
        result.push(...moduleList);
    });
    return result;
}

export const appRoutes = formatModules(modules, []);

export const appExternalRoutes = formatModules(externalModules, []);
