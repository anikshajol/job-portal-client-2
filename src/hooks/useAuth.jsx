import { useContext } from "react";
import { AuthContext } from "../provider/Context";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuth;
