import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CustomerList from "../pages/dashboard/Customer/CustomerList/CustomerList";
import SingleCustomer from "../pages/dashboard/Customer/SingleCustomer/SingleCustomer";

import DashBoard from "../pages/dashboard/dashboard/DashBoard";

import DashboardLayout from "../layout/DashboardLayout";
import UserActivate from "../pages/activate/UserActivate";
import Orders from "../pages/dashboard/order/Orders";
import SingleOrder from "../pages/dashboard/order/SingleOrder";
import Products from "../pages/dashboard/products/Products";
import ProductsDetails from "../pages/dashboard/products/ProductsDetails";
import UploadProduct from "../pages/dashboard/products/UploadProduct";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registraion from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/customers",
            element: (
              <PrivateRoute>
                <CustomerList />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/customer/:customerId",
            element: (
              <PrivateRoute>
                <SingleCustomer />
              </PrivateRoute>
            ),
          },

          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            ),
          },

          {
            path: "/dashboard/products",
            element: (
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/products/:productId",
            element: (
              <PrivateRoute>
                <ProductsDetails />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/products-details",
            element: (
              <PrivateRoute>
                <ProductsDetails />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/upload-product",
            element: (
              <PrivateRoute>
                <UploadProduct />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/orders",
            element: (
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/orders/:orderId",
            element: (
              <PrivateRoute>
                <SingleOrder />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registraion />,
  },
  {
    path: "/users/:id/verify/:token",
    element: <UserActivate />,
  },
]);
