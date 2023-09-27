import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { GoSearch } from "react-icons/go";
import { useQuery } from "react-query";

import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { fetchOrders } from "../../../lib/getOrders";
import OrderRow from "./OrderRow";

const Orders = () => {
  /* 
    show and search input field state
  */
  const [show, setShow] = useState(10);
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("");

  /* 
    page state
  */
  const [page, setPage] = useState(1);

  /* 
    handle input search field
  */
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearch(e.target.value);
    }
  };

  /* 
  handle input search field submit
 */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchField);
  };

  /* 
    fetch all Orders
  */
  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
    error: ordersError,
  } = useQuery({
    queryFn: () =>
      fetchOrders({
        search,
        page,
        perPage: show,
      }),
    queryKey: ["orders", { search, page, show }],
    staleTime: Infinity,
  });

  /* 
    order Content;

    */
  let ordersContent;
  if (isOrdersLoading) {
    ordersContent = <p>Loading...</p>;
  } else if (!isOrdersLoading && isOrdersError) {
    ordersContent = <p>{ordersError.message}</p>;
  } else if (!isOrdersLoading && orders.payload.data.length === 0) {
    ordersContent = <p>No orders found</p>;
  } else if (!isOrdersLoading && orders.payload.data.length > 0) {
    ordersContent = (
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">OrderId</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Time</th>
            <th className="py-3 px-6 text-center">Payment</th>
            <th className="py-3 px-6 text-center">Total Amount</th>

            <th className="py-3 px-6 text-center">Payment Method</th>
            <th className="py-3 px-6 text-center">Delivery</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders?.payload.data.map((order, index) => {
            return index % 2 === 0 ? (
              <OrderRow key={order._id} order={order} styles={"bg-gray-50"} />
            ) : (
              <OrderRow key={order._id} order={order} />
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <div className="p-7">
        <div className=" py-3">
          <h1 className="font-semibold text-2xl">Orders</h1>
          {/* <p className="customer-links">
            Home / <span>Customers</span>
          </p> */}
        </div>

        <div className="flex gap-4 sm:flex-row flex-col sm:justify-between sm:items-center">
          <form onSubmit={handleSearchSubmit}>
            <div className={`flex items-center bg-white w-56 sm:w-72`}>
              <input
                className="p-4 font-medium outline-none w-48 sm:w-64"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                onBlur={(e) => setSearch(e.target.value)}
                value={searchField}
              />

              <div className={`text-blue-500`}>
                <button type="submit" disabled={isOrdersLoading ? true : false}>
                  <GoSearch />
                </button>
              </div>
            </div>
          </form>

          {/* 
            select input
          */}
          <div className="w-28">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="showing-label">Showing</InputLabel>
              <Select
                labelId="showing"
                id="showing"
                value={show}
                label="Showing"
                onChange={(e) => setShow(e.target.value)}
              >
                {[10, 9, 8, 7, 6, 5].map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* 
        table
      */}
        <div className="overflow-x-auto element-with-scrollbar">
          <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                {/* 
                  customer table
                */}
                {ordersContent}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          className="flex justify-end mr-4 pagination mt-7"
          count={orders?.payload?.totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(_, val) => setPage(val)}
        />
      </div>
    </div>
  );
};

export default Orders;
