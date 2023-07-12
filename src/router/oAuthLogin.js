import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const GuestGuard = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate("/", { replace: true });
    }
  }, [auth, navigate]);

  return <>{children}</>;
};

export default GuestGuard;
