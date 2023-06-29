export const ROUTE_PATHS = {
  // forms
  SELECT: '/select',
  FORM_CONTROL: '/form',

  DIALOG: '/dialog',
  HYPER_TABLE: '/hyper-table'
};

export const NAVS = [
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
