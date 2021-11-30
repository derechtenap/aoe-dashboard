import { Link } from "react-router-dom";
import { GraphUp, Gear } from "react-bootstrap-icons";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/">
            <GraphUp className="navbar-icon" size={32} />
            <span className="navbar-logo-text">AOE Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/settings">
            <Gear className="navbar-icon" size={32} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
