export const ROUTE_PATHS = {
  FORM_CONTROL: '/form',
  HYPER_TABLE: '/hyper-table'
}

export const NAVS = [
  { title: 'UI Components' },
  {
    title: 'Form Control',
    icon: 'DocumentCheckIcon',
    action: ROUTE_PATHS.FORM_CONTROL
  },
  {
    title: 'Hyper Table',
    icon: 'CalculatorIcon',
    action: ROUTE_PATHS.HYPER_TABLE
  }
]

export const ROUTES = [
  { path: ROUTE_PATHS.FORM_CONTROL, component: () => import('./views/FormControlView.vue') },
  { path: ROUTE_PATHS.HYPER_TABLE, component: () => import('./views/HyperTableView.vue') }
]
