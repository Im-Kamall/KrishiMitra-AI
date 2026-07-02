import { Link } from "react-router-dom";

function Home() {
  const modules = [
    {
      title: "📊 Analytics Dashboard",
      desc: "View farmers, expert cases, AI features, and project status.",
      path: "/dashboard",
    },
    {
      title: "👨‍🌾 Farmer Registration",
      desc: "Register new farmers in the system.",
      path: "/register",
    },
    {
      title: "🌱 Crop Recommendation",
      desc: "AI recommends the best crop.",
      path: "/crop",
    },
    {
      title: "🌦 Live Weather",
      desc: "Get real-time weather and farming advice.",
      path: "/weather",
    },
    {
      title: "📷 Crop Image Detection",
      desc: "Upload crop image for Gemini AI diagnosis.",
      path: "/disease",
    },
    {
      title: "🦠 Symptom Diagnosis",
      desc: "Diagnose crop disease from symptoms.",
      path: "/symptoms",
    },
    {
      title: "🤖 AI Farmer Chatbot",
      desc: "Ask farming questions in English, Hindi, or Gujarati.",
      path: "/chatbot",
    },
    {
      title: "🧑‍💼 Expert Dashboard",
      desc: "View and manage farmer cases.",
      path: "/expert",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>🌾 KrishiMitra AI</h1>
        <p>Smart Agriculture Intelligence Platform</p>
      </header>

      <div className="grid">
        {modules.map((module, index) => (
          <div className="card" key={index}>
            <h2>{module.title}</h2>
            <p>{module.desc}</p>

            <Link to={module.path}>
              <button>Open</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;