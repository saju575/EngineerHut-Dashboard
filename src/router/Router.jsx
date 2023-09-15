import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CustomerList from "../pages/dashboard/Customer/CustomerList/CustomerList";
import SingleCustomer from "../pages/dashboard/Customer/SingleCustomer/SingleCustomer"


import Wishlist from "../pages/dashboard/wishlist/Wishlist";

import DashBoard from "../pages/dashboard/dashboard/DashBoard";
import Products from "../pages/dashboard/products/Products";
import ProductsDetails from "../pages/dashboard/products/ProductsDetails";
import UploadProduct from "../pages/dashboard/products/UploadProduct";
import Orders from "../pages/dashboard/order/order";
import OrderDetails from "../pages/dashboard/order/orderDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/customers",
                element: <CustomerList />,
                children: [],
            },
            {
                path: "/customer",
                element: <SingleCustomer />,
                children: [],
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
                path: "/orderDetails",
                element: <OrderDetails />,
            },
        ],
    },
]);
