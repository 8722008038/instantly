import '../styles/Hero.css';
import heroImg from '../assets/hero.png'; 

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Find, Contact & Close Your Ideal Clients</h1>
      <p>Automated Outreach • Deliverability Network • Lead Database • CRM</p>
      <button className="cta-primary">Start for Free</button>
    </div>
    <div className="hero-image">
      <img src={heroImg} alt="Hero" />
    </div>
  </section>
);

export default Hero;
