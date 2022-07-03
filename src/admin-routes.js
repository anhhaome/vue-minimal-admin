import { join } from "path-browserify";

export default function(config){
  return [
    {
      path: config.base || '/',
      children: [
        { path: "", redirect: join(config.base || '/', 'signin') },
        {
          path: "signin",
          component: () => import('@rugo-vn/vue/src/layouts/MAuthLayout.vue'),
          children: [
            {
              path: "",
              component: () => import('@rugo-vn/vue/src/views/SignInView.vue'),
            },
          ],
        },
      ]
    }
  ];
}