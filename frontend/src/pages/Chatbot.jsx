import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [language, setLanguage] = useState("English");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askAI = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      alert("Please enter your farming question.");
      return;
    }

    const userMessage = {
      type: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await api.post("/ask-ai", {
        question,
        language,
      });

      const aiMessage = {
        type: "ai",
        text: res.data.response.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setQuestion("");
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "AI assistant failed. Please check backend.",
        },
      ]);
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

      <div className="chat-window">
        {messages.length === 0 && (
          <div className="empty-chat">
            <h2>Ask KrishiMitra AI</h2>
            <p>Example: My tomato leaves are turning yellow. What should I do?</p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            className={msg.type === "user" ? "chat-msg user-msg" : "chat-msg ai-msg"}
            key={index}
          >
            <pre>{msg.text}</pre>
          </div>
        ))}

        {loading && (
          <div className="chat-msg ai-msg">
            <pre>Thinking...</pre>
          </div>
        )}
      </div>

      <form onSubmit={askAI} className="chat-form">
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

        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;