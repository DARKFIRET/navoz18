import React from "react";
import { RouteRecord } from "vite-react-ssg";
import "./index.css";
import Layout from "./Layout";

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.tsx',
    children: [
      {
        index: true,
        Component: React.lazy(() => import('./components/home')),
      },
      {
        path: '/about',
        Component: React.lazy(() => import('./components/about')),
      },
      {
        path: '/contacts',
        Component: React.lazy(() => import('./components/contacts')),
      },
    ],
  },
]