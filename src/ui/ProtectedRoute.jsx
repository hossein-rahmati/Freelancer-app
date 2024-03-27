import useAuthorize from "../features/authentication/useAuthorize.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading.jsx";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthorized, isAuthenticated } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
