import { useState } from "react";
import api from "../services/api";
import PageHeader from "../components/PageHeader";

function CropRecommendation() {
  const [form, setForm] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const recommendCrop = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        nitrogen: Number(form.nitrogen),
        phosphorus: Number(form.phosphorus),
        potassium: Number(form.potassium),
        temperature: Number(form.temperature),
        humidity: Number(form.humidity),
        ph: Number(form.ph),
        rainfall: Number(form.rainfall),
      };

      const res = await api.post("/recommend-crop", payload);
      setResult(res.data.recommendation);
    } catch {
      alert("Crop recommendation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <PageHeader
        title="🌱 Smart Crop Recommendation"
        subtitle="Enter soil nutrients and weather conditions to get AI-based crop suggestions."
      />

      <form onSubmit={recommendCrop} className="pro-form crop-form">
        <input name="nitrogen" placeholder="Nitrogen (N)" value={form.nitrogen} onChange={handleChange} />
        <input name="phosphorus" placeholder="Phosphorus (P)" value={form.phosphorus} onChange={handleChange} />
        <input name="potassium" placeholder="Potassium (K)" value={form.potassium} onChange={handleChange} />
        <input name="temperature" placeholder="Temperature °C" value={form.temperature} onChange={handleChange} />
        <input name="humidity" placeholder="Humidity %" value={form.humidity} onChange={handleChange} />
        <input name="ph" placeholder="Soil pH" value={form.ph} onChange={handleChange} />
        <input name="rainfall" placeholder="Rainfall mm" value={form.rainfall} onChange={handleChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Recommend Crop"}
        </button>
      </form>

      {result && (
        <div className="ai-report">
          <h2>🌾 Recommended Crop</h2>
          <h3>{result.recommended_crop}</h3>
          <p>{result.reason}</p>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;