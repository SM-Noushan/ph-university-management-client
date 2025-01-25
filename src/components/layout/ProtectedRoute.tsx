import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { currentToken } from "../../app/features/auth/authSlice";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = useAppSelector(currentToken);

  if (!token) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
