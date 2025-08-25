import "../styles/Features.css";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img1.jpeg";
import Img4 from "../assets/img2.png";
const features = [
  {
    img: Img1,
    title: "Outreach Automation",
    desc: "Set up automated email campaigns with ease.",
  },
  {
    img: Img2,
    title: "Unlimited Email Accounts",
    desc: "Scale outreach without extra cost.",
  },
  {
    img: Img3,
    title: "Deliverability Network",
    desc: "Ensure your emails land in inboxes.",
  },
  {
    img: Img4,
    title: "AI Copilot",
    desc: "Generate campaign ideas and summaries with AI.",
  },
];

const Features = () => (
  <section id="features" className="features">
    {features.map((f, idx) => (
      <div key={idx} className="feature_card">
        <img src={f.img} alt={f.title} className="h-16 w-16 rounded-full" />
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
    ))}
  </section>
);

export default Features;
