import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Branches from "../pages/Branches";
import Career from "../pages/Career";
import News from "../pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/branches",
    element: <Branches />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);