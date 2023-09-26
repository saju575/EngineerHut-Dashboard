const CustomerTableRow = ({ data, styles }) => {
  return (
    <tr
      className={`text-lg border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
    >
      {/* First column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="text-blue-500">{data.orderId}</span>
        </div>
      </td>

      {/* 2nd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{data.date}</span>
        </div>
      </td>

      {/* 3rd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{data.status}</span>
        </div>
      </td>
      {/* 4th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{data.totalItem} items</span>
        </div>
      </td>
      {/* 5th column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>${data.price}</span>
        </div>
      </td>
    </tr>
  );
};

export default CustomerTableRow;
