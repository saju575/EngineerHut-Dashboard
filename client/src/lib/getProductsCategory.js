import axios from "./axiosInstance";

/* 
  fetch categories of products
*/
export const fetchProductsCategories = async () => {
  try {
    const url = `/products/category/count`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error("Products categories fetching error");
  }
};
