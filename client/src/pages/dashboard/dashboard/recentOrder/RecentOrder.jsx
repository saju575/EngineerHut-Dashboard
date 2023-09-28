import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllRecentOrders } from "../../../../lib/getOrders";
import RecentOrderRow from "./RecentOrderRow";

const RecentOrder = () => {
  const [show, setShow] = useState(7);

  /* 
    fetch all Orders
  */
  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
    error: ordersError,
  } = useQuery({
    queryFn: () => fetchAllRecentOrders(show),
    queryKey: ["recentOrders", { show }],
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
  } else if (!isOrdersLoading && orders.payload.length === 0) {
    ordersContent = <p>No orders found</p>;
  } else if (!isOrdersLoading && orders.payload.length > 0) {
    ordersContent = (
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Order Id</th>
            <th className="py-3 px-6 text-left">Coustomer</th>
            <th className="py-3 px-6 text-left">Time</th>
            <th className="py-3 px-6 text-left">Payment</th>
            <th className="py-3 px-6 text-left">Delivery</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders?.payload?.map((order, index) => {
            return index % 2 === 0 ? (
              <RecentOrderRow
                key={order._id}
                order={order}
                styles={"bg-gray-50"}
              />
            ) : (
              <RecentOrderRow key={order._id} order={order} />
            );
          })}
        </tbody>
      </table>
    );
  }
  return (
    // <!-- component -->
    <div className="pt-8">
      <div className="flex md:justify-between md:flex-row flex-col md:items-center gap-8">
        <p className="capitalize md:text-lg text-slate-700 font-semibold">
          Recents orders
        </p>
        <div className="w-28">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="showing-label">Showing Latest</InputLabel>
            <Select
              labelId="showing"
              id="showing"
              value={show}
              label="Showing"
              onChange={(e) => setShow(e.target.value)}
            >
              {[7, 15, 30].map((v) => (
                <MenuItem key={v} value={v}>
                  {v} days
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="overflow-x-auto element-with-scrollbar">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              {ordersContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
