import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Wishlist from "../pages/dashboard/wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
