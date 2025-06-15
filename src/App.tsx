import { type FC } from 'react';
import { Suspense } from 'react';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  type RouteObject,
} from 'react-router';

import './App.css';
import 'antd/dist/reset.css';
import '@/styles/globalStyles.scss';
import { routerConfig, userPathDict, type Role } from './routerConfig';

interface LazyRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyRoute: FC<LazyRouteProps> = ({
  children,
  fallback = <div>Загрузка...</div>,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

const useUserRole = (): Role | undefined => {
  if (Math.random() > 0.33) {
    return 'admin';
  }
  if (Math.random() > 0.5) {
    return 'user';
  }

  return undefined;
};

const App = () => {
  const userRole = useUserRole();
  const allowedPaths = userPathDict[userRole || 'user'];

  const childRoutes: RouteObject[] = allowedPaths.map((path) => {
    const Component = routerConfig[path];

    return {
      path,
      element: (
        <LazyRoute>
          <Component />
        </LazyRoute>
      ),
    };
  });

  const mainRoute: RouteObject[] = [
    {
      path: '/',
      element: (
        <div>
          {userRole || 'user'}
          <nav>
            <ul>
              <li>
                <Link to="/">Тарифы</Link>
              </li>
              <li>
                <Link to="/clients">Клиенты</Link>
              </li>
              <li>
                <Link to="/forms">Формы</Link>
              </li>
              <li>
                <Link to="/ExpandableTable">ExpandableTable</Link>
              </li>
              <li>
                <Link to="/graph">graph</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      ),
      children: childRoutes,
    },
    {
      path: '*',
      element: <div>404</div>,
    },
  ];

  const router = createBrowserRouter(mainRoute);

  return <RouterProvider router={router} />;
};

export default App;
