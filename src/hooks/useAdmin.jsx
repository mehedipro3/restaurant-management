import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
//import { useQuery } from '@tanstack/react-query';


const useAdmin = () => {
  const { user , loading} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminPending, setIsAdminPending] = useState(true);

  // const { data: isAdmin, isPending: isAdminPending } = useQuery({
  //   queryKey: [user?.email, 'isAdmin'],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users/admin/${user.email}`);
  //     //console.log(res.data);
  //     res.send(res.data?.admin)
  //   }
  // });
  console.log("AdminRouter Debug:", {
    user,
    loading,
    isAdmin,
    isAdminPending
  });

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/admin/${user.email}`)
        .then(res => {
          setIsAdmin(res.data?.admin === true);
          setIsAdminPending(false);
        })
        .catch(err => {
          console.error("Admin check failed:", err);
          setIsAdmin(false);
          setIsAdminPending(false);
        });
    } else {
      setIsAdmin(false);
      setIsAdminPending(false);
    }
  }, [user, axiosSecure]);


  return [isAdmin, isAdminPending];
};

export default useAdmin;