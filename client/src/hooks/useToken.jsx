import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.stringify(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken);

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  return {
    setToken: saveToken,
    token,
  };
}
