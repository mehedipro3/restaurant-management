import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRouter = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminPending] = useAdmin();
  const location = useLocation();
  if (loading || isAdminPending) {
    return <progress className="progress w-56"></progress>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default AdminRouter;