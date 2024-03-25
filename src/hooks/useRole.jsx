import { useEffect, useState } from "react";
import useContextHook from "./useContextHook";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const [roleLoading, setRoleLoading] = useState(true);
  const { user } = useContextHook();
  const [role, setRole] = useState(false);
  //   const token = localStorage.getItem("auth-token");

  // get axiosSecure instance
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/user/role/${user?.email}`)
      .then((res) => {
        setRoleLoading(false);
        setRole(res.data.role);
      })
      .catch((err) => console.log(err.message));
  }, [axiosSecure, user]);
  return [role, roleLoading];
};

export default useRole;

// export default useRole
