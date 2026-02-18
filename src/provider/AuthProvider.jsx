import React from "react";
import { AuthContext } from "./Context";

const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "Anik",
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
