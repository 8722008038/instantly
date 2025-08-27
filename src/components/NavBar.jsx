import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import Lofo from "../assets/instantlyy.svg";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear state + tokens
    navigate("/login"); // redirect
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img className="h-auto w-auto" src={Lofo} alt="Logo" />
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <a href="#features">About</a>
        </li>
        <li>
          <a href="#FeatureCard">Features</a>
        </li>
        <li>
          <a href="#Unibox">Unibox</a>
        </li>
        <li>
          <a href="#CallToAction">Contact</a>
        </li>
      </ul>

      {/* Auth buttons */}
      <div>
        {user ? (
          <button onClick={handleLogout} className="cta-button bg-red-500">
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cta-button bg-blue-500"
          >
            Start for Free
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
