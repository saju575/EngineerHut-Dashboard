import axios from "./axiosInstance";

/* 
  create  products
*/
export const createProduct = async (data) => {
  try {
    const url = `/products/product`;

    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
