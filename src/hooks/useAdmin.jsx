import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      res.send(res.data?.admin)
    }
  });
  return [isAdmin , isAdminPending];
};

export default useAdmin;