import "./SingleCustomer.css";

import jon from "../../../../assets/img/snow.jpeg";
import CustomerTableRow from "./CustomerTableRow";

const dummyTableData = [
  {
    id: 1,
    orderId: "#748838",
    date: "2015-03-03",
    totalItem: 32,
    price: 49.99,

    status: "pending",
  },
  {
    id: 2,
    orderId: "#748818",
    date: "2015-03-03",
    totalItem: 21,
    price: 499,

    status: "completed",
  },
];

const SingleCustomer = () => {
  return (
    <>
      <div className="customer-wrapper ">
        <h1 className="customer-title">Customers</h1>
        <p className="customer-links">
          Home / <span>Customer List</span>
        </p>
        <div className="customer-inner flex lg:flex-row flex-col lg:space-x-2">
          {/* Left part*/}
          <div className="customer-innerLeft w-full lg:w-1/4 px-4 py-2">
            <img className="avatar object-cover" src={jon} alt="avatar" />
            <div className="innerLeftTxt">
              <h2>Margaret Raw</h2>
              <p className="text-muted">+88 0 19 6545 2329 (654) </p>
              <p className="text-blue">jonsnow@gmail.com</p>
              <p className="button">
                Balance <br /> $1200
              </p>
              <p>
                {" "}
                <span className="text-bold">Last Order:</span> <br />7 days ago
                : <span className="text-blue">#654649</span>{" "}
              </p>
              <p className="text-bold">
                Average Order Value:{" "}
                <span className="text-muted">
                  {" "}
                  <br /> $454
                </span>{" "}
              </p>
              <p>
                {" "}
                <span className="text-bold">Last Order:</span> <br />7 days ago
                : <span className="text-blue">#654649</span>{" "}
              </p>
              <p className="text-bold">Email Marketing</p>
              <p>Subscribed</p>
            </div>
          </div>

          {/* 
            right part
          */}
          <div className="customer-innerRight w-full lg:w-3/4">
            <div className="customer-rightTitle">
              <div className="scroll-y">
                <div className="orders-head p-2">
                  <h3 className="text-lg font-semibold">Orders</h3>
                  <p className="text-muted">Total spent $73802210 on 7 days</p>
                </div>

                {/* 
                    table start
                */}

                <div className="min-w-screen   flex items-center justify-center bg-gray-100 font-sans ">
                  <div className="w-full">
                    <div className="bg-white shadow-md rounded my-6 overflow-x-auto element-with-scrollbar">
                      <table className="min-w-max w-full table-auto">
                        <tbody className="text-gray-600 text-base font-light">
                          {dummyTableData?.map((data, index) => {
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
                    </div>
                  </div>
                </div>

                {/* 
                    table end
                */}

                <span className="all-order-btn cursor-pointer">
                  View All Order
                </span>
              </div>
            </div>

            {/* 
                account details part
            */}
            <div className="account-details bg-muted">
              <div className="account-dHead">
                <h4 className="text-bold">Account Details</h4>
                <p>🚀</p>
              </div>
              <hr />
              <div className="account-dContent">
                <div className="flexx">
                  <h6 className="text-muted">First Name:</h6>
                  <h6 className="text-bold">Margardt</h6>
                </div>
                <div className="flexx">
                  <h6 className="text-muted">Last Name:</h6>
                  <h6 className="text-bold">Raw</h6>
                </div>
                <div className="flexx">
                  <h6 className="text-muted">Date of Birth: </h6>
                  <h6 className="text-bold">15 July 1465</h6>
                </div>
                <div className="flexx">
                  <h6 className="text-muted">Gender: </h6>
                  <h6 className="text-bold">Male</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCustomer;
