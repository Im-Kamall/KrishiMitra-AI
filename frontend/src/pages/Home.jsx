import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCloudSun,
  FaLeaf,
  FaCamera,
  FaUserMd,
  FaChartLine,
  FaSeedling,
} from "react-icons/fa";

function Home() {
  const modules = [
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      desc: "Track farmers, expert cases, AI usage and project activity.",
      path: "/dashboard",
    },
    {
      icon: <FaSeedling />,
      title: "Farmer Registration",
      desc: "Register farmers with village, crop, language and soil details.",
      path: "/register",
    },
    {
      icon: <FaLeaf />,
      title: "Crop Recommendation",
      desc: "Recommend crops using soil nutrients and climate inputs.",
      path: "/crop",
    },
    {
      icon: <FaCloudSun />,
      title: "Live Weather Advisory",
      desc: "Fetch real-time weather and generate farming guidance.",
      path: "/weather",
    },
    {
      icon: <FaCamera />,
      title: "Crop Image Diagnosis",
      desc: "Upload crop images and detect diseases using Gemini Vision.",
      path: "/disease",
    },
    {
      icon: <FaRobot />,
      title: "AI Farmer Chatbot",
      desc: "Ask farming questions in English, Hindi or Gujarati.",
      path: "/chatbot",
    },
    {
      icon: <FaUserMd />,
      title: "Expert Dashboard",
      desc: "Review farmer disease cases and update expert status.",
      path: "/expert",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-content"
        >
          <span className="hero-badge">🌾 AI for Smarter Agriculture</span>

          <h1>KrishiMitra AI</h1>

          <p>
            A full-stack AI-powered smart agriculture platform that helps
            farmers with crop recommendation, live weather advisory, disease
            diagnosis, expert support and multilingual AI assistance.
          </p>

          <div className="hero-actions">
            <Link to="/dashboard">
              <button>View Dashboard</button>
            </Link>

            <Link to="/chatbot">
              <button className="secondary-btn">Ask AI Assistant</button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="stats-strip">
        <div>
          <h2>7+</h2>
          <p>Smart Modules</p>
        </div>

        <div>
          <h2>3</h2>
          <p>AI Features</p>
        </div>

        <div>
          <h2>Live</h2>
          <p>Weather API</p>
        </div>

        <div>
          <h2>Gemini</h2>
          <p>AI Powered</p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-title">
          <h2>Platform Modules</h2>
          <p>Everything a farmer needs in one intelligent dashboard.</p>
        </div>

        <div className="feature-grid">
          {modules.map((module, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{module.icon}</div>

              <h3>{module.title}</h3>
              <p>{module.desc}</p>

              <Link to={module.path}>
                <button>Open Module</button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;