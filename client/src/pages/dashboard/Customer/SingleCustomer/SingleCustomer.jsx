import "./SingleCustomer.css";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCustomer } from "../../../../lib/getCustomers";
import { fetchAllOrdersOfACustomer } from "../../../../lib/getOrders";
import CustomerTableRow from "./CustomerTableRow";

const SingleCustomer = () => {
  /*
    get the id parameter 
   */
  const { customerId } = useParams();

  /* 
    get customer using react query
  */
  const {
    data: customer,
    isLoading: isCustomerLoadding,
    isError: isCustomerError,
    error: customerError,
  } = useQuery({
    queryFn: () => fetchCustomer(customerId),
    queryKey: ["customer", { customerId }],
    staleTime: Infinity,
  });

  /* 
    get customer order using react query
  */
  const {
    data: orders,
    isLoading: isOrdersLoadding,
    isError: isOrdersError,
    error: ordersError,
  } = useQuery({
    queryFn: () => fetchAllOrdersOfACustomer(customerId),
    queryKey: ["singleCustomerOrder", { customerId }],
    staleTime: Infinity,
  });

  /* 
    render customer details
  */

  let customerProfile;

  if (isCustomerLoadding) {
    customerProfile = <p>Loadding...</p>;
  } else if (!isCustomerLoadding && isCustomerError) {
    customerProfile = <p>{customerError.message}</p>;
  } else if (!isCustomerLoadding && !customer.payload) {
    customerProfile = <p>No customer details found</p>;
  } else if (!isCustomerLoadding && customer.payload) {
    const { firstName, lastName, image, phone, email, dateOfBirth, gender } =
      customer.payload;

    customerProfile = (
      <>
        <img className="avatar object-cover" src={image} alt={firstName} />

        <div className="innerLeftTxt">
          <h2>{`${firstName} ${lastName}`}</h2>
          <p className="text-muted">{phone}</p>
          <p className="text-blue">{email}</p>
          {dateOfBirth && <p className="text-blue">{dateOfBirth}</p>}
          {gender && <p className="text-blue">{gender}</p>}
          {/* <p className="button">
            Balance <br /> $1200
          </p> */}
          {/* <p>
            {" "}
            <span className="text-bold">Last Order:</span> <br />7 days ago :{" "}
            <span className="text-blue">#654649</span>{" "}
          </p> */}
          {/* <p className="text-bold">
            Average Order Value:{" "}
            <span className="text-muted">
              {" "}
              <br /> $454
            </span>{" "}
          </p> */}
          {/* <p>
            {" "}
            <span className="text-bold">Last Order:</span> <br />7 days ago :{" "}
            <span className="text-blue">#654649</span>{" "}
          </p>
          <p className="text-bold">Email Marketing</p>
          <p>Subscribed</p> */}
        </div>
      </>
    );
  }

  /* 
    render a customer all order list
  */
  let customerOrderContent;
  if (isOrdersLoadding) {
    customerOrderContent = <p className="p-2">Loadding..</p>;
  } else if (!isOrdersLoadding && isOrdersError) {
    customerOrderContent = <p className="p-2">{ordersError.message}</p>;
  } else if (!isCustomerLoadding && orders.payload.length === 0) {
    customerOrderContent = <p className="p-2">Not order anything.</p>;
  } else if (!isOrdersLoadding && orders.payload.length > 0) {
    customerOrderContent = (
      <table className="min-w-max w-full table-auto">
        <tbody className="text-gray-600 text-base font-light">
          {orders?.payload?.map((data, index) => {
            return index % 2 === 0 ? (
              <CustomerTableRow
                key={data.id}
                data={data}
                styles={"bg-gray-50"}
              />
            ) : (
              <CustomerTableRow key={data.id} data={data} />
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <div className="customer-wrapper pt-4 min-h-screen">
        <h1 className="customer-title pb-8 ">Customer</h1>
        {/* <p className="customer-links">
          Home / <span>Customer List</span>
        </p> */}
        <div className="customer-inner flex lg:flex-row flex-col lg:space-x-2">
          {/* Left part*/}
          <div className="customer-innerLeft w-full lg:w-1/4 px-4 py-2">
            {/* 
              customer profile
            */}
            {customerProfile}
          </div>

          {/* 
            right part
          */}
          <div className="customer-innerRight w-full lg:w-3/4">
            <div className="customer-rightTitle">
              <div className="scroll-y">
                <div className="orders-head p-2">
                  <h3 className="text-lg font-semibold">Orders</h3>
                  {/* <p className="text-muted">Total spent $73802210 on 7 days</p> */}
                </div>

                {/* 
                    table start
                */}

                <div className="min-w-screen   flex items-center justify-center bg-gray-100 font-sans ">
                  <div className="w-full">
                    <div className="bg-white shadow-md rounded my-6 overflow-x-auto element-with-scrollbar">
                      {customerOrderContent}
                    </div>
                  </div>
                </div>

                {/* 
                    table end
                */}

                {/* <span className="all-order-btn cursor-pointer">
                  View All Order
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCustomer;
