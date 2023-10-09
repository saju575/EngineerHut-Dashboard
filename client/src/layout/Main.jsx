// import CustomerList from "../components/Customer/CustomerList/CustomerList";

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import TopBar from "../components/topbar/Topbar";

const Main = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
