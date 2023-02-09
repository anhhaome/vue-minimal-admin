import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/auth/signin' },
    {
      path: '/auth',
      component: () => import('../layouts/RAuthLayout.vue'),
      children: [
        { path: '', redirect: '/auth/signin' },
        {
          path: 'signin',
          component: () => import('../views/auth/SignInView.vue'),
        },
        {
          path: 'signout',
          redirect: '/auth/signin',
        },
      ],
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/RDashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'Introduction',
          component: () => import('../views/dashboard/IntroductionView.vue'),
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('../views/dashboard/ButtonView.vue'),
        },
        {
          path: 'checkbox',
          name: 'Checkbox',
          component: () => import('../views/dashboard/CheckboxView.vue'),
        },
        {
          path: 'heading',
          name: 'Heading',
          component: () => import('../views/dashboard/HeadingView.vue'),
        },
        {
          path: 'input',
          name: 'Input',
          component: () => import('../views/dashboard/InputView.vue'),
        },
        {
          path: 'icon',
          name: 'Icon',
          component: () => import('../views/dashboard/IconView.vue'),
        },
        {
          path: 'dialog',
          name: 'Dialog',
          component: () => import('../views/dashboard/DialogView.vue'),
        },
        {
          path: 'notification',
          name: 'Notification',
          component: () => import('../views/dashboard/NotificationView.vue'),
        },
      ],
    },
  ],
});

export default router;
