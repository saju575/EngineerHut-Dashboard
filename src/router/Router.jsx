import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DashBoard from "../pages/dashboard/dashboard/DashBoard";
import Products from "../pages/dashboard/products/Products";
import ProductsDetails from "../pages/dashboard/products/ProductsDetails";
import UploadProduct from "../pages/dashboard/products/UploadProduct";

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
          path: "/products",
          element: <Products />,
      },
      {
          path: "/products-details",
          element: <ProductsDetails />,
      },
      {
          path: "/upload-product",
          element: <UploadProduct />,
      },
  ],
  },
]);
