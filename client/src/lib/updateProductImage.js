import axios from "./axiosInstance";

/* 
  create  products
*/
export const updateProductImage = async (data) => {
  try {
    const { productId, formData } = data;
    const url = `/products/updateProductImage/${productId}`;

    const response = await axios.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addMoreImages = async (data) => {
  try {
    const { productId, formData } = data;
    const url = `/products/addProductImages/${productId}`;

    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
