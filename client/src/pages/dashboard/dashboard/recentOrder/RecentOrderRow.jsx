import moment from "moment";
import { useNavigate } from "react-router-dom";

const RecentOrderRow = ({ order, styles }) => {
  const navigate = useNavigate();
  //onClick handler for each customer
  const handleClick = () => {
    navigate(`/orders/${order._id}`);
  };
  //component
  return (
    <tr
      className={`text-lg cursor-pointer border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
      onClick={handleClick}
    >
      {/* First column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{order._id}</span>
        </div>
      </td>

      {/* second column */}
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              className="w-6 h-6 rounded-full object-cover"
              src={order.customer.image}
            />
          </div>
          <span>{`${order.customer.firstName} ${order.customer.lastName}`}</span>
        </div>
      </td>

      {/* third cloumn */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">
            {moment(order.order_date).format("MMM DD, YYYY h:mm A")}
          </span>
        </div>
      </td>

      {/* 4th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!order.paymentStatus ? (
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

      {/* 5th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!order.deliveryStatus ? (
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
    </tr>
  );
};

export default RecentOrderRow;
