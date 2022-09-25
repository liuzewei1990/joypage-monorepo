import { REDIRECT_ROUTE_NAME } from "@workAdmin/router/constants";

export const DEFAULT_LAYOUT = () => import("@workAdmin/layout/default-layout.vue");

export const REDIRECT_MAIN = {
    path: "/redirect",
    name: "redirectWrapper",
    component: DEFAULT_LAYOUT,
    meta: {
        requiresAuth: true,
        hideInMenu: true
    },
    children: [
        {
            path: "/redirect/:path",
            name: REDIRECT_ROUTE_NAME,
            component: () => import("@workAdmin/views/redirect/index.vue"),
            meta: {
                requiresAuth: true,
                hideInMenu: true
            }
        }
    ]
};

export const NOT_FOUND_ROUTE = {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@workAdmin/views/not-found/index.vue")
};
