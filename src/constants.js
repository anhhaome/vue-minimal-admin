export const ROUTE_PATHS = {
  ROOT: '/',
  HOME: '/home',
  SIGN_IN: '/sign-in',
  // SIGN_UP: '/sign-up',

  DASHBOARD: '/home',
  HEADING: '/home/heading',

  DIALOG: '/home/dialog',
  TABLE: '/home/table',

  // forms
  BUTTON: '/home/button',
  FORM: '/home/form',
  INPUT: '/home/input',
  SELECT: '/home/select'
};

export const MAIN_NAVS = [
  { title: 'Home', action: ROUTE_PATHS.DASHBOARD },
  { title: 'Sign In', action: ROUTE_PATHS.SIGN_IN }
  // { title: 'Sign Up', action: ROUTE_PATHS.SIGN_UP }
];

export const SIDE_NAVS = [
  { title: 'Overview' },
  {
    title: 'Dashboard',
    icon: 'RocketLaunchIcon',
    action: ROUTE_PATHS.DASHBOARD
  },
  { title: 'UI Components' },
  {
    title: 'Dialog',
    icon: 'ChatBubbleLeftEllipsisIcon',
    action: ROUTE_PATHS.DIALOG
  },

  {
    title: 'Forms',
    icon: 'DocumentTextIcon',
    children: [
      {
        title: 'Button',
        action: ROUTE_PATHS.BUTTON
      },
      {
        title: 'Form',
        action: ROUTE_PATHS.FORM
      },
      {
        title: 'Input',
        action: ROUTE_PATHS.INPUT
      },
      {
        title: 'Select',
        action: ROUTE_PATHS.SELECT
      }
    ]
  },

  {
    title: 'Heading',
    icon: 'BookmarkIcon',
    action: ROUTE_PATHS.HEADING
  },

  {
    title: 'Table',
    icon: 'CalculatorIcon',
    action: ROUTE_PATHS.TABLE
  }
];

export const ROUTES = [
  { path: ROUTE_PATHS.ROOT, redirect: ROUTE_PATHS.DASHBOARD },

  {
    path: ROUTE_PATHS.DASHBOARD,
    component: () => import('./views/DashboardView.vue')
  },

  {
    path: ROUTE_PATHS.HEADING,
    component: () => import('./views/HeadingView.vue')
  },

  {
    path: ROUTE_PATHS.DIALOG,
    component: () => import('./views/DialogView.vue')
  },

  {
    path: ROUTE_PATHS.TABLE,
    component: () => import('./views/TableView.vue')
  },

  // forms
  {
    path: ROUTE_PATHS.BUTTON,
    component: () => import('./views/forms/ButtonView.vue')
  },

  {
    path: ROUTE_PATHS.FORM,
    component: () => import('./views/forms/FormView.vue')
  },

  {
    path: ROUTE_PATHS.INPUT,
    component: () => import('./views/forms/InputView.vue')
  },

  {
    path: ROUTE_PATHS.SELECT,
    component: () => import('./views/forms/SelectView.vue')
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
