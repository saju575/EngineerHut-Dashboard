import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { fetchUserProfile } from "../lib/getUserProfile";
import axios from "../lib/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const [isFetch, setIsFetch] = useState(false);

  //get user data
  // const { data: userInfo } = useQuery(["user", isFetch], fetchUserProfile, {
  //   // The query will not execute until the userId exists
  //   enabled: !!isFetch,
  // });

  const f = async () => {
    const user = await axios.get("/users/user-profile", {
      withCredentials: true,
    });

    setUser(user.data.payload);
  };

  // Load user data from storage on app initialization
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      f();
    }
  }, []);

  // if (userInfo) {
  //   setUser(userInfo);
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
