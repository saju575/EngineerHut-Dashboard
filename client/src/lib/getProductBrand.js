import axios from "./axiosInstance";

/* 
  fetch brand of products
*/
export const fetchProductsBrand = async () => {
  try {
    const url = `/products/brand/count`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error("Products brand fetching error");
  }
};
