import axios from "./axiosInstance";

/* 
  create  products
*/
export const updateProduct = async (data) => {
  try {
    const { id, ...rest } = data;
    const url = `/products/product/${id}`;

    const response = await axios.patch(url, rest, {});

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
