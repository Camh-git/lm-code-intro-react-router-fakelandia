import logo from "../Fakelandia_DOJ_logo.png";
import { NavLink } from "react-router-dom";
const navHeader: React.FC = () => (
  <header>
    <img src={logo} alt="logo" className="HeaderLogo" />
    <nav style={{ width: "100%" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/confess">confess</NavLink>
      <NavLink to="/Misdomeanours">Misdomeanours</NavLink>
    </nav>
  </header>
);

export default navHeader;
