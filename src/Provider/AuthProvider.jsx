import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email , password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //  auth info
  const authInfo = {
    user,
    loading,
    createUser, 
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
