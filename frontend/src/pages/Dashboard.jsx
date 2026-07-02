import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import api from "../services/api";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [farmers, setFarmers] = useState(0);
  const [cases, setCases] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const farmerRes = await api.get("/farmers");
        const caseRes = await api.get("/expert-cases");

        setFarmers(farmerRes.data.total_farmers || 0);
        setCases(caseRes.data.total_cases || 0);
      } catch (error) {
        console.log("Stats loading failed");
      }
    };

    loadStats();
  }, []);

  const activityData = [
    { name: "Farmers", value: farmers },
    { name: "Cases", value: cases },
    { name: "AI Chat", value: 12 },
    { name: "Weather", value: 8 },
    { name: "Images", value: 6 },
  ];

  const pieData = [
    { name: "Crop AI", value: 30 },
    { name: "Weather", value: 20 },
    { name: "Chatbot", value: 25 },
    { name: "Image AI", value: 25 },
  ];

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <h1>📊 KrishiMitra AI Analytics</h1>

      <div className="stats-grid">
        <StatCard
          icon="👨‍🌾"
          title="Registered Farmers"
          value={farmers}
          desc="Farmers stored in the system"
        />

        <StatCard
          icon="🧑‍💼"
          title="Expert Cases"
          value={cases}
          desc="Cases generated for expert review"
        />

        <StatCard
          icon="🤖"
          title="AI Features"
          value="3"
          desc="Chatbot, Image AI, Crop AI"
        />

        <StatCard
          icon="✅"
          title="Project Status"
          value="MVP"
          desc="Ready for demo and deployment"
        />
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h2>📈 Feature Activity</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>🤖 AI Usage Split</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;