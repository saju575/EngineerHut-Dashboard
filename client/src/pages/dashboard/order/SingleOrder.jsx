import moment from "moment";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CardProductPrice from "../../../components/order/orderDetails/cardProductPrice";
import CardContact from "../../../components/order/orderDetails/customer/cardContact";
import CardShipping from "../../../components/order/orderDetails/customer/cardShipping";
import { fetchOrder } from "../../../lib/getOrders";

const SingleOrder = () => {
  const { orderId } = useParams();

  /* 
    fetch single order
  */
  const {
    data: order,
    isLoading: isOrderLoading,
    isError: isOrderError,
    error: orderError,
  } = useQuery({
    queryFn: () => fetchOrder(orderId),
    queryKey: ["order", orderId],
    staleTime: Infinity,
  });

  /* 
    order Content;

    */
  let orderContent;
  if (isOrderLoading) {
    orderContent = <p>Loading...</p>;
  } else if (!isOrderLoading && isOrderError) {
    orderContent = <p>{orderError.message}</p>;
  } else if (!isOrderLoading && !order.payload) {
    orderContent = <p>No order information found</p>;
  } else if (!isOrderLoading && order.payload) {
    const { items, customer, _id, order_date, paymentStatus } = order.payload;
    orderContent = (
      <>
        <div className="container text-lg">
          <div className="flex justify-between items-center flex-wrap p-5 bg-white mr-1">
            <div className="">
              <h2 className="text-lg">
                Items from Order Id <span className="font-bold">{_id}</span>
              </h2>
            </div>

            <div className="space-y-2">
              <span className="text-slate-500 mr-2 text-lg">
                {moment(order_date).format("MMMM DD, YYYY [at] h:mm a")}
              </span>
              <div className="lg:inline-block">
                {!paymentStatus ? (
                  <button className="px-4 py-1 rounded-md bg-red-200 text-red-500">
                    Unpaid
                  </button>
                ) : (
                  <button className="px-4 py-1 rounded-md bg-green-200 text-green-600">
                    Paid
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:flex-row">
            <CardProductPrice items={items} />
            {/* <div className="my-4 w-full lg:w-1/2">
                            <CardTransaction />
                            <CardBalance />
                        </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between lg:flex-row gap-6">
          {/* Customer Contact */}
          <CardContact customer={customer} />
          {/* Shipping Address */}
          <CardShipping order={order.payload} />
          {/* Billing Address */}
          {/* <CardBilling /> */}
        </div>
      </>
    );
  }
  return (
    <React.Fragment>
      <div className="container mx-auto bg-gray-100 p-8">
        {/* <HeadingOrder /> */}
        <h2 className="text-2xl capitalize font-bold mb-6">Order</h2>
        {orderContent}
      </div>
    </React.Fragment>
  );
};

export default SingleOrder;
