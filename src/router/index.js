import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/DashBoard.vue"),
    },
    {
        path: "/grid-system",
        name: "GridSystem",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/GridSystem.vue"),
    },
    {
        path: "/grid-list-page",
        name: "GridListPage",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/GridListPage.vue"),
    },
    {
        path: "/breakpoint",
        name: "Breakpoint",
        component: () => import("../views/Breakpoints.vue"),
    },
    {
        path: "/typography",
        name: "Typography",
        component: () => import("../views/Typography.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
