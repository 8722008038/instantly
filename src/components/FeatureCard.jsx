import "../styles/FeaturesCard.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features-section" id="FeatureCard">
      <h2 className="features-heading">Unlock Unprecedented Sales Growth</h2>
      <div className="features-grid">
        <FeatureCard
          icon={
            <svg
              className="feature-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          }
          title="AI-Powered Outreach"
          description="Craft highly personalized emails and automate."
        />
        <FeatureCard
          icon={
            <svg
              className="feature-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 14.99c-.066.52.031 1.05.293 1.517l-1.474 1.474a.75.75 0 001.06 1.06l1.474-1.474c.467.262.997.359 1.517.293A12.001 12.001 0 0021.08 9.01zm-5.02 5.02l-2 2-4-4"
              ></path>
            </svg>
          }
          title="Unlimited Deliverability"
          description="Ensure your emails land in the primary inbox."
        />
        <FeatureCard
          icon={
            <svg
              className="feature-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          }
          title="Lead Enrichment"
          description="Access millions of verified leads and enrich your existing contacts."
        />
        <FeatureCard
          icon={
            <svg
              className="feature-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          }
          title="Centralized CRM"
          description="Manage all your conversations, leads,intuitive platform."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
