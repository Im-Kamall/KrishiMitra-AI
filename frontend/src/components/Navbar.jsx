import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌾 KrishiMitra AI
      </Link>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/chatbot">AI Chatbot</Link>
        <Link to="/disease">Image AI</Link>
      </div>
    </nav>
  );
}

export default Navbar;