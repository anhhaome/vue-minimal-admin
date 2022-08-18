import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/signin" },
    {
      path: "/signin",
      component: () => import("../layouts/RAuthLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/SignInView.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      component: () => import("../layouts/RDashboardLayout.vue"),
      children: [
        {
          path: "",
          name: "Introduction",
          component: () => import("../views/dashboard/IntroductionView.vue"),
        },
      ]
    }
  ]
})

export default router
