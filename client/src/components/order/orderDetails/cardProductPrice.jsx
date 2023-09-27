import React from "react";
import { convertStringWithTwoDecimalPlaces } from "../../../lib/convertStringToNumber";

function calculateTotalPrice(items) {
  // Initialize variables
  let totalPrice = 0;
  let totalTax = 0;
  let totalShippingFee = 0;

  // Iterate through items
  for (const item of items) {
    const product = item.product_id;
    const quantity = item.quantity;
    const price =
      product.discountPrice > 0 ? product.discountPrice : product.price;
    const shippingFee = product.shippingFee;
    const taxRate = product.taxRate;

    // Calculate item subtotal and add to total price
    const itemSubtotal = quantity * price;
    totalPrice += itemSubtotal;

    // Calculate tax amount (if applicable) and add to total tax
    if (taxRate > 0) {
      const itemTax = (itemSubtotal * taxRate) / 100;
      totalTax += itemTax;
    }

    // Add shipping fee to total shipping fee
    totalShippingFee += quantity * shippingFee;
  }
  return {
    totalPrice,
    totalShippingFee,
    totalTax,
  };
}

const CardProductPrice = ({ items }) => {
  const total = calculateTotalPrice(items);

  return (
    <React.Fragment>
      <div
        className="my-4 w-full  overflow-x-auto  element-with-scrollbar h-5/6"
        id="product-details"
      >
        <table className="items-center w-full border-collapse text-lg">
          <thead className="">
            <tr className="bg-slate-300">
              <th
                className={
                  "px-6 align-middle border border-solid py-5  uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                }
              >
                Product
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-5  uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                }
              >
                Porducts Name
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-5  uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-900 font-bold border-gray-100"
                }
              >
                Price
              </th>
              <th
                className={
                  "px-6 align-top border border-solid py-5  uppercase border-l-0 border-r-0 whitespace-nowrap text-center text-gray-900 font-bold border-gray-100"
                }
              >
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-300 text-base">
            {/* list of products */}

            {items.map((item) => {
              const productPrice =
                item.product_id.discountPrice === 0
                  ? item.product_id.price
                  : item.product_id.discountPrice;

              const tPrice = convertStringWithTwoDecimalPlaces(
                productPrice * item.quantity
              );

              return (
                <tr key={item._id} className="even:bg-white odd:bg-slate-200">
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                    <img
                      src={item.product_id.images[0].url}
                      alt={item.product_id.name}
                      style={{
                        height: "45px",
                        width: "45px",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                    <h5 className="font-bold uppercase">
                      {item.product_id.name}
                    </h5>
                    <h5 className="uppercase">
                      Size:{" "}
                      <span className="font-bold">{item.product_id.size}</span>
                    </h5>
                    <span className="text-slate-500 capitalize">
                      Category: {item.product_id.category}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                    <span className="text-slate-500">
                      {productPrice} x {item.quantity}
                    </span>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center whitespace-nowrap p-4">
                    <span className="text-slate-500">{tPrice}</span>
                  </td>
                </tr>
              );
            })}

            {/* Subtotal pricing */}
            <tr className="bg-white border-t">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"></td>
              <td
                colSpan={2}
                className="border-b px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
              >
                <h4 className="text-black text-base font-bold">Subtotal</h4>
                <div className="text-slate-500">
                  <p>Delivery Charge</p>

                  <p>Vat Tax</p>
                </div>
              </td>
              <td className="border-b px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                <h4 className="text-black text-base font-bold">
                  ${total.totalPrice}
                </h4>
                <div className="text-slate-500">
                  <p>${total.totalShippingFee}</p>
                  <p>${total.totalTax}</p>
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"></td>
              <td
                colSpan={2}
                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4"
              >
                <h4 className="text-black text-base font-bold">Total</h4>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4">
                <h4 className="text-black text-base font-bold">
                  ${total.totalPrice + total.totalShippingFee + total.totalTax}
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default CardProductPrice;
