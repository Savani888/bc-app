import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, u => setUser(u));
  }, []);

  if (user === undefined) return null;
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
