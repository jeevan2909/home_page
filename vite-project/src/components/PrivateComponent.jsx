import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function PrivateComponent({ children }) {
  const { loginUser, loading, user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
   return navigate("/login");
  }
  return <div>{children}</div>;
}