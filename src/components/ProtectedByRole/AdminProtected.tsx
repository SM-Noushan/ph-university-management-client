import { Navigate } from "react-router-dom";
import { USER_ROLE } from "../../constants";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../app/features/auth/authSlice";

export const AdminProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUser = useAppSelector(selectCurrentUser);

  if (
    currentUser?.role !== USER_ROLE.admin &&
    currentUser?.role !== USER_ROLE.superAdmin
  )
    return (
      <Navigate
        to={currentUser?.role === USER_ROLE.student ? "/" : "/faculty"}
        replace
      />
    );

  return children;
};
