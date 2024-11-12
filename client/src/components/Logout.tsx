import { useLogoutMutation } from "../redux/api/authApi";

export const Logout = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const response = await logout({}).unwrap();

      localStorage.clear();

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
