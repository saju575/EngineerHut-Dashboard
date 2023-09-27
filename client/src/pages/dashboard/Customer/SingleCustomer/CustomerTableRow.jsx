import moment from "moment";
import { useNavigate } from "react-router-dom";

function getTotalQuantityAndTotalPrice(data) {
  let totalQuantity = 0;
  let totalPrice = 0;

  // Iterate through the data to calculate the total quantity and total price

  for (const item of data) {
    const product = item.product_id;
    const itemPrice =
      product.discountPrice === 0 ? product.price : product.discountPrice;
    totalQuantity += item.quantity;
    totalPrice += itemPrice * item.quantity;
  }
  return {
    totalQuantity,
    totalPrice,
  };
}

const CustomerTableRow = ({ data, styles }) => {
  const { totalPrice, totalQuantity } = getTotalQuantityAndTotalPrice(
    data.items
  );

  const navigate = useNavigate();

  const handleToNavigate = () => {
    navigate(`/orders/${data._id}`);
  };
  return (
    <tr
      className={`text-lg border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
    >
      {/* First column */}
      <td
        className="py-3 px-6 text-left whitespace-nowrap cursor-pointer"
        onClick={handleToNavigate}
      >
        <div className="flex items-center">
          <span className="text-blue-500">{data._id}</span>
        </div>
      </td>

      {/* 2nd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{moment(data.order_date).format("MMM DD, YYYY h:mm A")}</span>
        </div>
      </td>

      {/* 3rd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!data.deliveryStatus ? (
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
        4th column
      */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {!data.paymentStatus ? (
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
          <span>{totalQuantity} items</span>
        </div>
      </td>
      {/* 6th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>${totalPrice}</span>
        </div>
      </td>
    </tr>
  );
};

export default CustomerTableRow;
