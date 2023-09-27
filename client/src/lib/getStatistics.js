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
