import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CustomerRows = ({ customer, styles = "" }) => {
  const navigate = useNavigate();

  //onClick handler for each customer
  const handleClick = () => {
    navigate(`/customer/${customer._id}`);
  };
  //component
  return (
    <tr
      className={`border-b cursor-pointer border-gray-200 text-lg hover:bg-gray-100 ${
        styles && styles
      }`}
      onClick={handleClick}
    >
      {/* first column */}
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              className="w-6 h-6 rounded-full object-cover"
              src={customer.image}
            />
          </div>
          <span>{`${customer.firstName} ${customer.lastName}`}</span>
        </div>
      </td>

      {/* 
            second column
        */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span>{customer.email}</span>
        </div>
      </td>

      {/* 
            3rd column
        */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">{customer.country}</span>
        </div>
      </td>

      {/* 
            4th column
        */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="capitalize">{customer.joinDate}</span>
        </div>
      </td>

      {/* 
        5th column
      */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {/* <span className="capitalize">${customer.joinDate}</span> */}
          <FaTrash />
        </div>
      </td>
    </tr>
  );
};

export default CustomerRows;
