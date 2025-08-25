import "../styles/NavBar.css";
import Lofo from "../assets/instantlyy.svg";
const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <img clasName="h- w-auto" src={Lofo} />
    </div>
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
    <button className="cta-button">Start for Free</button>
  </nav>
);

export default NavBar;
