/* eslint-disable react-refresh/only-export-components -- router config, not a component file */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Profile = lazy(() => import("../pages/Profile"));
const Branches = lazy(() => import("../pages/Branches"));
const Career = lazy(() => import("../pages/Career"));
const News = lazy(() => import("../pages/News"));

const fallback = (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <span className="text-gray-400 text-sm">Memuat...</span>
  </div>
);

const wrap = (el: React.ReactElement) => <Suspense fallback={fallback}>{el}</Suspense>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: wrap(<Home />),
  },
  {
    path: "/product",
    element: wrap(<Product />),
  },
  {
    path: "/profile",
    element: wrap(<Profile />),
  },
  {
    path: "/branches",
    element: wrap(<Branches />),
  },
  {
    path: "/career",
    element: wrap(<Career />),
  },
  {
    path: "/news",
    element: wrap(<News />),
  },
]);