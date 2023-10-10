import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import axios from "../lib/axiosInstance";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const accessToken = Cookies.get("accessToken");

      if (accessToken) {
        const response = await axios.get("/users/user-profile", {
          withCredentials: true,
        });

        setUser(response.data.payload);
        setIsLoading(false); // Set isLoading to false when user data is fetched
      } else {
        setIsLoading(false); // Set isLoading to false if there is no accessToken
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false); // Set isLoading to false in case of an error
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
