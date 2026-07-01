import { useState } from "react";
import api from "../services/api";

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const recommendCrop = async (e) => {
    e.preventDefault();

    const payload = {
      nitrogen: Number(form.nitrogen),
      phosphorus: Number(form.phosphorus),
      potassium: Number(form.potassium),
      temperature: Number(form.temperature),
      humidity: Number(form.humidity),
      ph: Number(form.ph),
      rainfall: Number(form.rainfall),
    };

    try {
      const res = await api.post("/recommend-crop", payload);
      setResult(res.data.recommendation);
    } catch (error) {
      alert("Crop recommendation failed");
    }
  };

  return (
    <div className="page">
      <h1>🌱 Crop Recommendation</h1>

      <form onSubmit={recommendCrop} className="form">
        <input name="nitrogen" placeholder="Nitrogen (N)" value={form.nitrogen} onChange={handleChange} />
        <input name="phosphorus" placeholder="Phosphorus (P)" value={form.phosphorus} onChange={handleChange} />
        <input name="potassium" placeholder="Potassium (K)" value={form.potassium} onChange={handleChange} />
        <input name="temperature" placeholder="Temperature" value={form.temperature} onChange={handleChange} />
        <input name="humidity" placeholder="Humidity" value={form.humidity} onChange={handleChange} />
        <input name="ph" placeholder="Soil pH" value={form.ph} onChange={handleChange} />
        <input name="rainfall" placeholder="Rainfall" value={form.rainfall} onChange={handleChange} />

        <button type="submit">Recommend Crop</button>
      </form>

      {result && (
        <div className="result-card">
          <h2>Recommended Crop: {result.recommended_crop}</h2>
          <p>{result.reason}</p>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;