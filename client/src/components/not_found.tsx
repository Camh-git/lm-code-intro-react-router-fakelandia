import { NavLink } from "react-router-dom";
const NotFound: React.FC = () => (
  <section>
    404: Not found. Please check your spelling,{" "}
    <NavLink to="/">or click here to go home</NavLink>
  </section>
);

export default NotFound;
