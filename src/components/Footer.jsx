import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>
            Instantly<span>.ai</span>
          </h2>
          <p>Supercharge your outreach and sales with AI-driven automation.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
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
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Instantly.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
