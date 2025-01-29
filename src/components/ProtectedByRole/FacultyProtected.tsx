import { Navigate } from "react-router-dom";
import { USER_ROLE } from "../../constants";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../app/features/auth/authSlice";

export const FacultyProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentUser = useAppSelector(selectCurrentUser);

  if (currentUser?.role !== USER_ROLE.faculty)
    return (
      <Navigate
        to={currentUser?.role === USER_ROLE.student ? "/" : "/admin"}
        replace
      />
    );

  return children;
};
