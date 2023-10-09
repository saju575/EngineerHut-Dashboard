import moment from "moment";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order, styles = "" }) => {
  const navigate = useNavigate();

  /* 
    destructuring
  */
  const {
    _id,
    customer,
    order_date,
    paymentStatus,
    deliveryStatus,
    paymentMethod,
    totalprice,
  } = order;

  //onClick handler for each customer
  const handleClick = () => {
    navigate(`/dashboard/orders/${order._id}`);
  };
  //component
  return (
    <tr
      className={`border-b  border-gray-200 text-lg hover:bg-gray-100 ${
        styles && styles
      }`}
    >
      {/* first column */}

      {/* 
            second column
        */}
      <td
        className="py-3 px-6 text-left whitespace-nowrap cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <span>{_id}</span>
        </div>
      </td>

      {/* 
            3rd column
        */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">{`${customer.firstName} ${customer.lastName}`}</span>
        </div>
      </td>

      {/* 
            4th column
        */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">
            {moment(order_date).format("MMM DD, YYYY h:mm A")}
          </span>
        </div>
      </td>

      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!paymentStatus ? (
            <span className="px-3 py-1 text-sm rounded-2xl bg-red-200 text-red-500">
              Unpaid
            </span>
          ) : (
            <span className="px-3 py-1 text-sm rounded-2xl bg-green-300 text-green-600">
              Paid
            </span>
          )}
        </div>
      </td>

      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">{totalprice}</span>
        </div>
      </td>

      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">{paymentMethod}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!deliveryStatus ? (
            <span className="px-3 py-1 text-sm rounded-2xl bg-red-200 text-red-500">
              Processing
            </span>
          ) : (
            <span className="px-3 py-1 text-sm rounded-2xl bg-green-300 text-green-600">
              Deliverd
            </span>
          )}
        </div>
      </td>

      {/* 
        5th column
      */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center gap-2">
          <AiOutlineEdit />
          <FaTrash />
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
