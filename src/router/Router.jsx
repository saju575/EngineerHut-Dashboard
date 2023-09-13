import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Wishlist from "../pages/dashboard/wishlist/Wishlist";

import DashBoard from "../pages/dashboard/dashboard/DashBoard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
       {
         path: "/wishlist",
         element: <Wishlist />,
      }
    ],
  },
]);
