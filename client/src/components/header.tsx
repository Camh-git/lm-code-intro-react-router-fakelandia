import logo from "../Fakelandia_DOJ_logo.png";
import { NavLink } from "react-router-dom";
const navHeader: React.FC = () => (
  <header>
    <img src={logo} alt="logo" className="HeaderLogo" />
    <nav style={{ width: "100%" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/confess">Confess</NavLink>
      <NavLink to="/misdomeanours">Misdomeanours</NavLink>
    </nav>
  </header>
);

export default navHeader;
