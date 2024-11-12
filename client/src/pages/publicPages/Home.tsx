import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>prisijungta</div>
      <Link to="/login">login</Link>
      <Link to="/register">reg</Link>
    </div>
  );
};
