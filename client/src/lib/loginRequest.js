import axios from "./axiosInstance";

/* 
  create  products
*/
export const userLogin = async (data) => {
  try {
    const url = `/users/login`;

    const response = await axios.post(url, data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
