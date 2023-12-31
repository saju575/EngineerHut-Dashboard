import React from "react";
import { ImLocation } from "react-icons/im";

const CardShipping = ({ order }) => {
  const { customerAddress } = order;

  return (
    <React.Fragment>
      <div className="my-4 w-full lg:w-1/2 " id="product-details">
        <table className="items-center w-full border-collapse h-full">
          <thead className="">
            <tr className="bg-slate-300">
              <th
                className={
                  "px-6 align-middle border border-solid py-5 text-xs lg:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                }
              >
                Shopping Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-300">
            <tr className="bg-slate-50">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs lg:text-sm p-4 space-y-2">
                <p className="text-slate-500">
                  <span className="inline-block text-indigo-500">
                    <ImLocation />
                  </span>{" "}
                  {customerAddress}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default CardShipping;
