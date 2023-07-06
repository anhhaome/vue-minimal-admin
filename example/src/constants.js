export const ROUTE_PATHS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',

  // forms
  SELECT: '/dashboard/select',
  FORM_CONTROL: '/dashboard/form',

  DIALOG: '/dashboard/dialog',
  HYPER_TABLE: '/dashboard/hyper-table'
};

export const MAIN_NAVS = [
  { title: 'Dashboard', action: ROUTE_PATHS.DASHBOARD },
  { title: 'Sign In', action: ROUTE_PATHS.SIGN_IN },
  { title: 'Sign Up', action: ROUTE_PATHS.SIGN_UP }
];

export const SIDE_NAVS = [
  { title: 'UI Components' },
  {
    title: 'Forms',
    icon: 'DocumentTextIcon',
    children: [
      {
        title: 'Form Control',
        action: ROUTE_PATHS.FORM_CONTROL
      },
      {
        title: 'Select',
        action: ROUTE_PATHS.SELECT
      }
    ]
  },
  {
    title: 'Dialog',
    icon: 'ChatBubbleLeftEllipsisIcon',
    action: ROUTE_PATHS.DIALOG
  },
  {
    title: 'Hyper Table',
    icon: 'CalculatorIcon',
    action: ROUTE_PATHS.HYPER_TABLE
  }
];

export const ROUTES = [
  { path: ROUTE_PATHS.HOME, redirect: ROUTE_PATHS.DASHBOARD },

  // forms
  {
    path: ROUTE_PATHS.FORM_CONTROL,
    component: () => import('./views/forms/FormControlView.vue')
  },
  {
    path: ROUTE_PATHS.SELECT,
    component: () => import('./views/forms/SelectView.vue')
  },

  {
    path: ROUTE_PATHS.DIALOG,
    component: () => import('./views/DialogView.vue')
  },

  {
    path: ROUTE_PATHS.HYPER_TABLE,
    component: () => import('./views/HyperTableView.vue')
  }
];

export const SAMPLE = {
  countries: [
    { text: 'Viet Nam', value: 'vn' },
    { text: 'United States of America', value: 'us' },
    { text: 'United Kingdom', value: 'uk' }
  ],
  colors: ['red', 'green', 'blue', 'cyan', 'emeral', 'pink', 'yellow']
};
