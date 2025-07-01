import { lazy } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import '@/styles/globalStyles.scss';

type RoutePath = '/' | '/clients' | '/forms' | '/ExpandableTable' | '/graph';

export const routerConfig: Record<
  RoutePath,
  React.LazyExoticComponent<React.FC>
> = {
  '/': lazy(() => import('./modules/tariffs/TariffBlock')),
  '/clients': lazy(() => import('./modules/clients/Clients')),
  '/forms': lazy(() => import('./modules/forms/Forms')),
  '/ExpandableTable': lazy(
    () => import('./modules/expandableTable/ExpandableTable')
  ),
  '/graph': lazy(() => import('./modules/graphics/Graphics')),
};

export type Role = 'admin' | 'user';

export const userPathDict: Record<Role, RoutePath[]> = {
  user: ['/', '/graph'],
  admin: ['/', '/clients', '/forms', '/ExpandableTable', '/graph'],
};
