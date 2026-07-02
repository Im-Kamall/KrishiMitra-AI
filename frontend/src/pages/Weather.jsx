import { useState } from "react";
import api from "../services/api";
import PageHeader from "../components/PageHeader";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      alert("Please enter a city");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/live-weather", { city });
      setWeather(res.data.live_weather);
    } catch {
      alert("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  const advisory =
    weather?.temperature > 35
      ? "High temperature detected. Irrigate crops early morning or evening."
      : weather?.humidity > 75
      ? "High humidity detected. Monitor crops for fungal diseases."
      : "Weather is normal. Continue regular crop care.";

  return (
    <div className="page">
      <PageHeader
        title="🌦 Live Weather Advisory"
        subtitle="Fetch real-time weather and receive smart farming guidance."
      />

      <form onSubmit={getWeather} className="pro-form">
        <input
          type="text"
          placeholder="Enter city or village name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Fetching..." : "Get Live Weather"}
        </button>
      </form>

      {weather && weather.success && (
        <div className="weather-report">
          <h2>{weather.city}, {weather.country}</h2>

          <div className="weather-grid">
            <div>
              <span>🌡</span>
              <h3>{weather.temperature}°C</h3>
              <p>Temperature</p>
            </div>

            <div>
              <span>💧</span>
              <h3>{weather.humidity}%</h3>
              <p>Humidity</p>
            </div>

            <div>
              <span>🌬</span>
              <h3>{weather.wind_speed} m/s</h3>
              <p>Wind Speed</p>
            </div>

            <div>
              <span>☁</span>
              <h3>{weather.weather}</h3>
              <p>{weather.description}</p>
            </div>
          </div>

          <div className="advisory-box">
            <h3>🌱 Farming Advisory</h3>
            <p>{advisory}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;