import axios from "./axiosInstance";

/* 
  fetch all customer
*/
export const fetchCustomers = async (queryKey) => {
  const { search, page, perPage } = queryKey;

  // Create an object to hold the query parameters that are present
  const queryParams = {};

  // Add query parameters to the object if they are not undefined
  if (search) {
    queryParams.search = search;
  }
  if (page) {
    queryParams.page = page;
  }
  if (perPage) {
    queryParams.perPage = perPage;
  }

  const queryString = new URLSearchParams(queryParams).toString();

  const url = `/customers/customer/allcustomers?${queryString}`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

/* 
  fetch single customer
*/
export const fetchCustomer = async (id) => {
  try {
    const url = `/customers/${id}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
