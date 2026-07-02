import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/live-weather", {
        city: city,
      });

      setWeather(res.data.live_weather);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <h1>🌦 Live Weather</h1>

      <form onSubmit={getWeather} className="form">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </form>

      {weather && weather.success && (
        <div className="weather-card">
          <h2>
            {weather.city}, {weather.country}
          </h2>

          <p>🌡 Temperature: {weather.temperature} °C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>🌬 Wind: {weather.wind_speed} m/s</p>
          <p>☁ Weather: {weather.weather}</p>
          <p>📝 Description: {weather.description}</p>

          <hr />

          <h3>🌱 Farming Advisory</h3>

          <p>
            {weather.temperature > 35
              ? "High temperature. Irrigate crops early morning or evening."
              : weather.humidity > 75
              ? "High humidity. Monitor crops for fungal disease."
              : "Weather is normal. Continue regular crop care."}
          </p>
        </div>
      )}

      {weather && !weather.success && (
        <div className="result-card">
          <h2>City Not Found</h2>
          <p>{weather.message}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;