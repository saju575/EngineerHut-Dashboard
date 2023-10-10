import axios from "./axiosInstance";

/* 
  create  products
*/
export const userRegisterProcess = async (data) => {
  try {
    const url = `/users/process-register`;

    const response = await axios.post(url, data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
