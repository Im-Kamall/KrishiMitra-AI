import { useState } from "react";
import api from "../services/api";

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerFarmer = async (e) => {
    e.preventDefault();

    try {
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
    } catch (err) {
      setMessage("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>👨‍🌾 Farmer Registration</h1>

      <form onSubmit={registerFarmer}>

        <input
          name="name"
          placeholder="Farmer Name"
          value={form.name}
          onChange={handleChange}
        /><br /><br />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        /><br /><br />

        <input
          name="village"
          placeholder="Village"
          value={form.village}
          onChange={handleChange}
        /><br /><br />

        <input
          name="language"
          placeholder="Language"
          value={form.language}
          onChange={handleChange}
        /><br /><br />

        <input
          name="crop"
          placeholder="Crop"
          value={form.crop}
          onChange={handleChange}
        /><br /><br />

        <input
          name="soil_type"
          placeholder="Soil Type"
          value={form.soil_type}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">
          Register Farmer
        </button>

      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default FarmerRegistration;