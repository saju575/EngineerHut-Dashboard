import {
  FaBagShopping,
  FaBoxOpen,
  FaDatabase,
  FaUserPlus,
} from "react-icons/fa6";
import { useQuery } from "react-query";
import { fetchStatisticSummery } from "../../../../lib/getStatistics";

const Summery = () => {
  /* 
    fetch all summery
  */
  const {
    data: summery,
    isLoading: isSummeryLoading,
    isError: isSummeryError,
    error: summeryError,
  } = useQuery({
    queryFn: () => fetchStatisticSummery(),
    queryKey: ["summery"],
    staleTime: Infinity,
  });

  /* 
      summery content showing
    */
  let summeryContent;

  if (isSummeryLoading) {
    summeryContent = <p>Loading...</p>;
  } else if (!isSummeryLoading && isSummeryError) {
    summeryContent = <p>{summeryError.message}</p>;
  } else if (!isSummeryLoading && !summery.payload) {
    summeryContent = <p>No summery found</p>;
  } else if (!isSummeryLoading && summery.payload) {
    summeryContent = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* First card */}
          <div className="shadow p-4 rounded bg-slate-50">
            <div className="flex justify-between items-center p-4 relative">
              <div className="flex flex-col">
                <span className="text-slate-500 mb-1">Total Revenue</span>
                <span className="text-slate-900 text-xl font-semibold">
                  ${summery.payload.totalRevenue}
                </span>
              </div>
              <div className="text-green-500 bg-green-100 p-2 rounded">
                <FaDatabase />{" "}
              </div>
              <div className="absolute w-1 rounded-md h-full bg-green-500 top-0 left-0 bottom-0"></div>
            </div>
          </div>

          {/* second card */}
          <div className="shadow p-4 rounded bg-slate-50">
            <div className="flex justify-between items-center p-4 relative">
              <div className="flex flex-col">
                <span className="text-slate-500 mb-1">Total Orders</span>
                <span className="text-slate-900 text-xl font-semibold">
                  {summery.payload.totalOrders}
                </span>
              </div>
              <div className="text-[#686de0] bg-green-100 p-2 rounded">
                <FaBagShopping />{" "}
              </div>
              <div className="absolute w-1 rounded-md h-full bg-[#686de0] top-0 left-0 bottom-0"></div>
            </div>
          </div>

          {/* third card */}
          <div className="shadow p-4 rounded bg-slate-50">
            <div className="flex justify-between items-center p-4 relative">
              <div className="flex flex-col">
                <span className="text-slate-500 mb-1">Total Products</span>
                <span className="text-slate-900 text-xl font-semibold">
                  {summery.payload.totalProducts}
                </span>
              </div>
              <div className="text-[#ff7979] bg-green-100 p-2 rounded">
                <FaBoxOpen />{" "}
              </div>
              <div className="absolute w-1 rounded-md h-full bg-[#ff7979] top-0 left-0 bottom-0"></div>
            </div>
          </div>

          {/* fourth card */}
          <div className="shadow p-4 rounded bg-slate-50">
            <div className="flex justify-between items-center p-4 relative">
              <div className="flex flex-col">
                <span className="text-slate-500 mb-1">Total Coustomers</span>
                <span className="text-slate-900 text-xl font-semibold">
                  {summery.payload.totalCustomers}
                </span>
              </div>
              <div className="text-[#22a6b3] bg-green-100 p-2 rounded">
                <FaUserPlus />{" "}
              </div>
              <div className="absolute w-1 rounded-md h-full bg-[#22a6b3] top-0 left-0 bottom-0"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return summeryContent;
};

export default Summery;
