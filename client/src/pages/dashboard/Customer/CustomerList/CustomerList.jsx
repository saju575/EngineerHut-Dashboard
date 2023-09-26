import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { GoSearch } from "react-icons/go";
import { useQuery } from "react-query";
import { fetchCustomers } from "../../../../lib/getCustomers";
import CustomerRows from "./CustomersRow";

import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import styles from "./customer.module.css";

const CustomerList = () => {
  /* 
    show and search input field state
  */
  const [show, setShow] = useState(10);
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("");

  /* 
    page state
  */
  const [page, setPage] = useState(1);

  /* 
    handle input search field
  */
  const handleSearch = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearch(e.target.value);
    }
  };

  /* 
  handle input search field submit
 */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchField);
  };

  /* 
    fetchProducts categories
  */
  const {
    data: customers,
    isLoading: isCustomersLoading,
    isError: isCustomersError,
    error: customersError,
  } = useQuery({
    queryFn: () =>
      fetchCustomers({
        search,
        page,
        perPage: show,
      }),
    queryKey: ["customers", { search, page, show }],
    staleTime: Infinity,
  });

  /* 
    customers Content;

    */
  let customersContent;
  if (isCustomersLoading) {
    customersContent = <p>Loading...</p>;
  } else if (!isCustomersLoading && isCustomersError) {
    customersContent = <p>{customersError.message}</p>;
  } else if (!isCustomersLoading && customers.payload.data.length === 0) {
    customersContent = <p>No product found</p>;
  } else if (!isCustomersLoading && customers.payload.data.length > 0) {
    customersContent = (
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-center">Country</th>
            <th className="py-3 px-6 text-center">Join Date</th>

            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {customers?.payload.data.map((customer, index) => {
            return index % 2 === 0 ? (
              <CustomerRows
                key={customer._id}
                customer={customer}
                styles={"bg-gray-50"}
              />
            ) : (
              <CustomerRows key={customer._id} customer={customer} />
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <div className="p-7">
        <div className=" py-3">
          <h1 className="font-semibold text-2xl">Customers</h1>
          {/* <p className="customer-links">
            Home / <span>Customers</span>
          </p> */}
        </div>

        <div className="flex gap-4 sm:flex-row flex-col sm:justify-between sm:items-center">
          <form onSubmit={handleSearchSubmit}>
            <div className={`${styles.search} bg-white w-56 sm:w-72`}>
              <input
                className="p-4 font-medium outline-none w-48 sm:w-64"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                onBlur={(e) => setSearch(e.target.value)}
                value={searchField}
              />

              <div className={`text-blue-500`}>
                <button
                  type="submit"
                  disabled={isCustomersLoading ? true : false}
                >
                  <GoSearch />
                </button>
              </div>
            </div>
          </form>

          {/* 
            select input
          */}
          <div className="w-28">
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="showing-label">Showing</InputLabel>
              <Select
                labelId="showing"
                id="showing"
                value={show}
                label="Showing"
                onChange={(e) => setShow(e.target.value)}
              >
                {[10, 9, 8, 7, 6, 5].map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* 
        table
      */}
        <div className="overflow-x-auto element-with-scrollbar">
          <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans ">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                {/* 
                  customer table
                */}
                {customersContent}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          className="flex justify-end mr-4 pagination mt-7"
          count={customers?.payload?.totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(_, val) => setPage(val)}
        />
      </div>
    </div>
  );
};

export default CustomerList;
