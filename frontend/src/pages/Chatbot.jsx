import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [language, setLanguage] = useState("English");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      alert("Please enter your farming question.");
      return;
    }

    try {
      setLoading(true);
      setAnswer("");

      const res = await api.post("/ask-ai", {
        question,
        language,
      });

      setAnswer(res.data.response.answer);
    } catch (error) {
      alert("AI assistant failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <h1>🤖 AI Farmer Chat Assistant</h1>

      <form onSubmit={askAI} className="form">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Gujarati">Gujarati</option>
        </select>

        <textarea
          placeholder="Ask your farming question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button type="submit">
          {loading ? "Thinking..." : "Ask KrishiMitra AI"}
        </button>
      </form>

      {answer && (
        <div className="ai-report">
          <h2>🌾 KrishiMitra AI Answer</h2>
          <pre>{answer}</pre>
        </div>
      )}
    </div>
  );
}

export default Chatbot;