import axios from "./axiosInstance";
/* 
  fetch statistic
*/

export const fetchStatisticSummery = async () => {
  try {
    const url = `/statistics/summery`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const fetchBestSellingProducts = async (queryKey) => {
  const { page, perPage, daysAgo, minProductsSold } = queryKey;

  // Create an object to hold the query parameters that are present
  const queryParams = {};

  // Add query parameters to the object if they are not undefined
  if (daysAgo) {
    queryParams.daysAgo = daysAgo;
  }
  if (minProductsSold) {
    queryParams.minProductsSold = minProductsSold;
  }

  if (page) {
    queryParams.page = page;
  }
  if (perPage) {
    queryParams.perPage = perPage;
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `/statistics/product/best-sells?${queryString}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
