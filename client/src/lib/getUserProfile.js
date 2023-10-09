import axios from "./axiosInstance";

export const fetchUserProfile = async () => {
  try {
    const url = `/users/user-profie`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
