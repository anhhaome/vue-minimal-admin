export const NOTICE_TIMEOUT = 2000;
export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const NAVS = [
  { type: 'label', name: 'Overview' },
  {
    type: 'link',
    name: 'Introduction',
    href: '/dashboard',
    icon: 'home',
  },
  { type: 'label', name: 'Components' },
  {
    type: 'link',
    name: 'RButton',
    href: '/dashboard/button',
    icon: 'play-circle',
  },
  {
    type: 'link',
    name: 'RCheckbox',
    href: '/dashboard/checkbox',
    icon: 'checkbox',
  },
  {
    type: 'link',
    name: 'RDialog',
    href: '/dashboard/dialog',
    icon: 'layers',
  },
  {
    type: 'link',
    name: 'RHeading',
    href: '/dashboard/heading',
    icon: 'pricetag',
  },
  {
    type: 'link',
    name: 'RInput',
    href: '/dashboard/input',
    icon: 'terminal',
  },
  {
    type: 'link',
    name: 'RNotification',
    href: '/dashboard/notification',
    icon: 'notifications',
  },
  {
    type: 'link',
    name: 'Others',
    href: '/dashboard/others',
    icon: 'ellipsis-horizontal',
  },
  { type: 'label', name: 'References' },
  {
    type: 'link',
    name: 'Icon',
    href: '/dashboard/icon',
    icon: 'flower',
  },
  { type: 'label', name: 'Features' },
  {
    type: 'link',
    name: 'Sign out',
    href: '/auth/signout',
    icon: 'log-out',
  },
];
