import axios from "./axiosInstance";

/* 
  fetch all customer
*/
export const fetchOrders = async (queryKey) => {
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

  const url = `/orders/all?${queryString}`;
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
export const fetchOrder = async (orderId) => {
  try {
    const url = `/orders/${orderId}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

/* 
  fetch a single customer all orders list
*/
export const fetchAllOrdersOfACustomer = async (customerId) => {
  try {
    const url = `/orders/customer/${customerId}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
