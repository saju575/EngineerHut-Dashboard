import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import { useState } from "react";
import { fetchBestSellingProducts } from "../../../../lib/getStatistics";
import BestSellRow from "./BestSellRow";

import { useQuery } from "react-query";

/*
    conponents
 */
const BestSellingProduct = () => {
  const [page, setPage] = useState(1);
  const [days, setDays] = useState(30);
  const [minSoldProducts, setMinSoldProducts] = useState(3);

  /* 
    fetch products 
  */
  const {
    data: products,
    isLoading: isProductsLoadding,
    isError: isProductError,
    error: productError,
  } = useQuery({
    queryFn: () =>
      fetchBestSellingProducts({
        daysAgo: parseInt(days),
        page: parseInt(page),
        minProductsSold: parseInt(minSoldProducts),
      }),
    queryKey: ["bestProducts", { page, days, minSoldProducts }],
    staleTime: Infinity,
  });

  /* 
    products rendering
  */
  let productsContent;

  if (isProductsLoadding) {
    productsContent = <p>Loading...</p>;
  } else if (!isProductsLoadding && isProductError) {
    productsContent = <p>{productError.message}</p>;
  } else if (!isProductsLoadding && products.payload.data.length === 0) {
    productsContent = <p>No product found</p>;
  } else if (!isProductsLoadding && products.payload.data.length > 0) {
    productsContent = (
      <table className="min-w-max w-full table-auto">
        <tbody className="text-gray-600 text-sm font-light">
          {products?.payload.data?.map((product, index) => {
            return index % 2 === 0 ? (
              <BestSellRow
                key={index}
                product={product}
                styles={"bg-gray-50"}
              />
            ) : (
              <BestSellRow key={index} product={product} />
            );
          })}
        </tbody>
      </table>
    );
  }
  return (
    <div className="pt-8">
      <div className="mb-1 flex flex-col sm:flex-row justify-between items-center">
        <p className="capitalize md:text-lg text-slate-700 font-semibold w-full sm:w-1/2 sm:mb-0 mb-4">
          Best selling products
        </p>
        <div className="flex items-center w-full  sm:w-1/2 sm:justify-end">
          {/* <p className="capitalize text-lg text-slate-700 font-semibold">
            sort by :{" "}
          </p> */}
          {/* <label
            htmlFor="sort"
            className="capitalize md:text-lg text-slate-700 font-semibold w-16"
          >
            Sort by
          </label> */}

          {/* <select
            id="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-40"
          >
            <option value={3}>Today</option>
            <option value={6}>Yesterday</option>
          </select> */}
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="showing-label">Showing Latest</InputLabel>
            <Select
              labelId="showing"
              id="showing"
              value={days}
              label="Showing"
              onChange={(e) => setDays(e.target.value)}
            >
              {[1, 2, 3, 5, 7, 15, 30].map((v) => (
                <MenuItem key={v} value={v}>
                  {v} days
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <hr />
      {/* table */}
      <div className="overflow-x-auto element-with-scrollbar">
        <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
          <div className="w-full ">
            <div className="bg-white shadow-md rounded my-6">
              {productsContent}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        className="flex justify-end mr-4 pagination mt-7"
        count={products?.payload?.totalPages}
        variant="outlined"
        shape="rounded"
        onChange={(_, val) => setPage(val)}
      />
    </div>
  );
};

export default BestSellingProduct;
