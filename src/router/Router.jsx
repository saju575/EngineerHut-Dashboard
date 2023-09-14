import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CustomerList from "../pages/dashboard/Customer/CustomerList/CustomerList";
import SingleCustomer from "../pages/dashboard/Customer/SingleCustomer/SingleCustomer"


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
  ],
  },
]);
