import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/signin" },
    {
      path: "/signin",
      component: () => import("../layouts/MAuthLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/SignInView.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("../layouts/MDashboardLayout.vue"),
      children: [
        {
          path: "",
          name: "Introduction",
          component: () => import("../views/dashboard/IntroductionView.vue"),
        },
        {
          path: "alert",
          name: "Alert",
          component: () => import("../views/dashboard/AlertView.vue"),
        },
        {
          path: "breadcrumb",
          name: "Breadcrumb",
          component: () => import("../views/dashboard/BreadcrumbView.vue"),
        },
        {
          path: "button",
          name: "Button",
          component: () => import("../views/dashboard/ButtonView.vue"),
        },
        {
          path: "dialog",
          name: "Dialog",
          component: () => import("../views/dashboard/DialogView.vue"),
        },
        {
          path: "dropdown",
          name: "Dropdown",
          component: () => import("../views/dashboard/DropdownView.vue"),
        },
        {
          path: "list",
          name: "List",
          component: () => import("../views/dashboard/ListView.vue"),
        },
        {
          path: "input",
          name: "Input",
          component: () => import("../views/dashboard/InputView.vue"),
        },
        {
          path: "table",
          name: "Table",
          component: () => import("../views/dashboard/TableView.vue"),
        },
        {
          path: "db",
          name: "Db",
          component: () => import("../views/dashboard/DbView.vue"),
        },
        {
          path: "http",
          name: "Http",
          component: () => import("../views/dashboard/HttpView.vue"),
        },
        {
          path: "notification",
          name: "Notification",
          component: () => import("../views/dashboard/NotificationView.vue"),
        },
        {
          path: "common-dialog",
          name: "Common Dialog",
          component: () => import("../views/dashboard/CommonDialogView.vue"),
        },
      ],
    },
  ],
});

export default router;
