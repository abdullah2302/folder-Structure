import { Link } from "react-router-dom";
import ThemeToggleButton from "./common/ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="navbar-beautiful flex justify-between items-center">
      <h1 className="nav-title-beautiful">Auth App</h1>

      <div className="flex items-center">
        <Link to="/login" className="nav-link-beautiful mr-8">Login</Link>
        <div className="nav-separator"></div>
        <Link to="/signup" className="nav-link-beautiful ml-8">Sign Up</Link>
      </div>

      <ThemeToggleButton />
    </nav>
  );
}


