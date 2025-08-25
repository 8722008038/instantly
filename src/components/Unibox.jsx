import "../styles/Unibox.css";
import emailimg from "../assets/emailimg.png";

const Unibox = () => {
  return (
    <div className="unibox-content" id="Unibox">
      <h2>
        Respond to Leads and Close Deals with
        <span className="bgtext">Unibox</span>
      </h2>
      <p>
        Manage conversations across inboxes in Unibox. AI Custom Reply Labels
        automatically categorize responses for you, so you can focus on moving
        your outbound pipeline forward, from Interested to Closed-Won.
      </p>
      <button className="cta-primary">Start for Free</button>
      <img src={emailimg} />
    </div>
  );
};

export default Unibox;
