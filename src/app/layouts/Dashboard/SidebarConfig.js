import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'order',
    path: '/app/orders',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Resources',
    path: '/app/resources',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Transporter Details',
    path: '/app/transporter-details',
    icon: getIcon(peopleFill)
  },
  {
    title: 'chat',
    path: '/app/chat',
    icon: getIcon(fileTextFill)
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
