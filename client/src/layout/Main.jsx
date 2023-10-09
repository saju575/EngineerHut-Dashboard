// import CustomerList from "../components/Customer/CustomerList/CustomerList";

import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>Nav bar layout</div>
      <Outlet />
    </>
  );
};

export default Main;
