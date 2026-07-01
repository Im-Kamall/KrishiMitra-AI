import { Link } from "react-router-dom";

function Home() {
  const modules = [
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
      title: "🌦 Weather Advisory",
      desc: "Get irrigation and rainfall guidance.",
      path: "/weather",
    },
    {
      title: "📷 Crop Image Detection",
      desc: "Upload crop image for diagnosis.",
      path: "/disease",
    },
    {
      title: "🦠 Symptom Diagnosis",
      desc: "Diagnose crop issues from symptoms.",
      path: "/symptoms",
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