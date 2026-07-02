import { useState } from "react";
import api from "../services/api";
import PageHeader from "../components/PageHeader";

function FarmerRegistration() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    village: "",
    language: "",
    crop: "",
    soil_type: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerFarmer = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/register-farmer", form);
      setMessage(res.data.message);

      setForm({
        name: "",
        phone: "",
        village: "",
        language: "",
        crop: "",
        soil_type: "",
      });
    } catch {
      setMessage("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <PageHeader
        title="👨‍🌾 Farmer Registration"
        subtitle="Register farmers with crop, village, language and soil details."
      />

      <form onSubmit={registerFarmer} className="pro-form farmer-form">
        <input
          name="name"
          placeholder="Farmer Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="village"
          placeholder="Village / City"
          value={form.village}
          onChange={handleChange}
        />

        <select
          name="language"
          value={form.language}
          onChange={handleChange}
        >
          <option value="">Select Language</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>

        <input
          name="crop"
          placeholder="Current Crop"
          value={form.crop}
          onChange={handleChange}
        />

        <select
          name="soil_type"
          value={form.soil_type}
          onChange={handleChange}
        >
          <option value="">Select Soil Type</option>
          <option value="Black Soil">Black Soil</option>
          <option value="Red Soil">Red Soil</option>
          <option value="Sandy Soil">Sandy Soil</option>
          <option value="Loamy Soil">Loamy Soil</option>
          <option value="Clay Soil">Clay Soil</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register Farmer"}
        </button>
      </form>

      {message && (
        <div className="result-card">
          <h2>{message.includes("success") ? "✅ Success" : "⚠️ Status"}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default FarmerRegistration;