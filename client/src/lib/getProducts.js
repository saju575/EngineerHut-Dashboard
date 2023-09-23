import axios from "./axiosInstance";

/* 
  fetch all available product
*/
export const fetchProducts = async (queryKey) => {
  const { search, minPrice, maxPrice, page, perPage, category, brand, size } =
    queryKey;

  // Create an object to hold the query parameters that are present
  const queryParams = {};

  // Add query parameters to the object if they are not undefined
  if (search) {
    queryParams.search = search;
  }
  if (size) {
    queryParams.size = size;
  }
  if (category) {
    queryParams.category = category;
  }
  if (brand) {
    queryParams.brand = brand;
  }
  if (minPrice) {
    queryParams.minPrice = minPrice;
  }
  if (maxPrice) {
    queryParams.maxPrice = maxPrice;
  }
  if (page) {
    queryParams.page = page;
  }
  if (perPage) {
    queryParams.perPage = perPage;
  }

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `/products/all?${queryString}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

/* 
  fetch simgle Product
*/

export const fetchProduct = async (id) => {
  try {
    const url = `/products/${id}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error("Product fetching error");
  }
};
