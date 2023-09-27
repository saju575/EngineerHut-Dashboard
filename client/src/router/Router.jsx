import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CustomerList from "../pages/dashboard/Customer/CustomerList/CustomerList";
import SingleCustomer from "../pages/dashboard/Customer/SingleCustomer/SingleCustomer";

import Wishlist from "../pages/dashboard/wishlist/Wishlist";

import DashBoard from "../pages/dashboard/dashboard/DashBoard";

import Orders from "../pages/dashboard/order/Orders";

import SingleOrder from "../pages/dashboard/order/SingleOrder";
import Products from "../pages/dashboard/products/Products";
import ProductsDetails from "../pages/dashboard/products/ProductsDetails";
import UploadProduct from "../pages/dashboard/products/UploadProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/customers",
        element: <CustomerList />,
      },
      {
        path: "/customer/:customerId",
        element: <SingleCustomer />,
      },

      {
        path: "/",
        element: <DashBoard />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductsDetails />,
      },
      {
        path: "/products-details",
        element: <ProductsDetails />,
      },
      {
        path: "/upload-product",
        element: <UploadProduct />,
      },

      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/:orderId",
        element: <SingleOrder />,
      },
    ],
  },
]);
