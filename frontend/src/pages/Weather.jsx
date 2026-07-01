import { useState } from "react";
import api from "../services/api";

function Weather() {
  const [form, setForm] = useState({
    temperature: "",
    humidity: "",
    rainfall_chance: "",
    wind_speed: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getAdvisory = async (e) => {
    e.preventDefault();

    const payload = {
      temperature: Number(form.temperature),
      humidity: Number(form.humidity),
      rainfall_chance: Number(form.rainfall_chance),
      wind_speed: Number(form.wind_speed),
    };

    try {
      const res = await api.post("/weather-advisory", payload);
      setResult(res.data.weather_advisory);
    } catch (error) {
      alert("Weather advisory failed");
    }
  };

  return (
    <div className="page">
      <h1>🌦 Weather Advisory</h1>

      <form onSubmit={getAdvisory} className="form">
        <input name="temperature" placeholder="Temperature" value={form.temperature} onChange={handleChange} />
        <input name="humidity" placeholder="Humidity" value={form.humidity} onChange={handleChange} />
        <input name="rainfall_chance" placeholder="Rainfall Chance (%)" value={form.rainfall_chance} onChange={handleChange} />
        <input name="wind_speed" placeholder="Wind Speed" value={form.wind_speed} onChange={handleChange} />

        <button type="submit">Get Advisory</button>
      </form>

      {result && (
        <div className="result-card">
          <h2>{result.alert_type}</h2>
          <p>{result.advisory}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;