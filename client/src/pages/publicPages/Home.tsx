import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/login">login</Link>
      <Link to="/register">reg</Link>
    </div>
  );
};
