import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestSellRow = ({ product, styles }) => {
  const navigate = useNavigate();
  const { totalQuantity, product: p } = product;

  return (
    <tr
      className={`border-b border-gray-200 hover:bg-gray-100 ${
        styles && styles
      }`}
      onClick={() => {
        navigate(`/products/${p._id}`);
      }}
    >
      {/* First column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={p.images[0].url}
              alt={p.name}
              className="object-cover w-10 h-10"
            />
          </div>
          <div>
            <p className="text-slate-700 text-lg font-semibold uppercase">
              {p.name}
            </p>
            <p className="text-slate-600">
              {moment(p.updatedAt).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </td>

      {/* second column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex flex-col items-center">
          <span className="text-slate-700 text-lg font-semibold">Price</span>
          <span className="text-slate-600">${p.price}</span>
        </div>
      </td>

      {/* 3rd column */}
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex flex-col items-center">
          <span className="text-slate-700 text-lg font-semibold">Sold</span>
          <span className="text-slate-600">{totalQuantity}</span>
        </div>
      </td>
    </tr>
  );
};

export default BestSellRow;
