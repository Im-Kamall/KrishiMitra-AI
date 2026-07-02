import { useEffect, useState } from "react";
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
import PageHeader from "../components/PageHeader";

function Dashboard() {
  const [farmers, setFarmers] = useState(0);
  const [cases, setCases] = useState(0);
  const [analytics, setAnalytics] = useState({
    weather_requests: 0,
    chat_requests: 0,
    image_diagnoses: 0,
    crop_recommendations: 0,
    recent_activity: {
      weather_requests: [],
      chat_requests: [],
      image_diagnoses: [],
      crop_recommendations: [],
    },
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const farmerRes = await api.get("/farmers");
        const caseRes = await api.get("/expert-cases");
        const analyticsRes = await api.get("/analytics");

        setFarmers(farmerRes.data.total_farmers || 0);
        setCases(caseRes.data.total_cases || 0);
        setAnalytics(analyticsRes.data.analytics);
      } catch {
        console.log("Dashboard stats failed");
      }
    };

    loadStats();
  }, []);

  const activityData = [
    { name: "Farmers", value: farmers },
    { name: "Cases", value: cases },
    { name: "Chatbot", value: analytics.chat_requests },
    { name: "Weather", value: analytics.weather_requests },
    { name: "Image AI", value: analytics.image_diagnoses },
    { name: "Crop AI", value: analytics.crop_recommendations },
  ];

  const pieData = [
    { name: "Crop AI", value: analytics.crop_recommendations },
    { name: "Weather", value: analytics.weather_requests },
    { name: "Chatbot", value: analytics.chat_requests },
    { name: "Image AI", value: analytics.image_diagnoses },
  ];

  return (
    <div className="page">
      <PageHeader
        title="📊 Analytics Dashboard"
        subtitle="Monitor KrishiMitra AI activity, farmer support and smart agriculture insights."
      />

      <div className="stats-grid">
        <StatCard icon="👨‍🌾" title="Farmers" value={farmers} desc="Registered farmer profiles" />
        <StatCard icon="🧑‍💼" title="Expert Cases" value={cases} desc="Cases submitted for review" />
        <StatCard icon="🤖" title="AI Chats" value={analytics.chat_requests} desc="Farmer AI questions asked" />
        <StatCard icon="🌦" title="Weather Checks" value={analytics.weather_requests} desc="Live weather requests" />
        <StatCard icon="📷" title="Image Diagnoses" value={analytics.image_diagnoses} desc="Gemini Vision analyses" />
        <StatCard icon="🌱" title="Crop AI" value={analytics.crop_recommendations} desc="Crop recommendations generated" />
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h2>📈 Platform Activity</h2>
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
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                {pieData.map((_, index) => (
                  <Cell key={index} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="quick-actions">
        <h2>⚡ Quick Actions</h2>

        <div className="quick-grid">
          <a href="/chatbot">Ask AI Assistant</a>
          <a href="/disease">Analyze Crop Image</a>
          <a href="/weather">Check Live Weather</a>
          <a href="/crop">Recommend Crop</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;