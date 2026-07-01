import { useState } from "react";
import api from "../services/api";

function SymptomDiagnosis() {
  const [form, setForm] = useState({
    farmer_name: "",
    crop_name: "",
    symptoms: "",
    language: "English",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const diagnoseSymptoms = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/crop-disease-diagnosis", form);
      setResult(res.data);
    } catch (error) {
      alert("Symptom diagnosis failed");
    }
  };

  return (
    <div className="page">
      <h1>🦠 Symptom Diagnosis</h1>

      <form onSubmit={diagnoseSymptoms} className="form">
        <input name="farmer_name" placeholder="Farmer Name" value={form.farmer_name} onChange={handleChange} />
        <input name="crop_name" placeholder="Crop Name" value={form.crop_name} onChange={handleChange} />
        <input name="language" placeholder="Language" value={form.language} onChange={handleChange} />
        <textarea name="symptoms" placeholder="Describe symptoms" value={form.symptoms} onChange={handleChange}></textarea>

        <button type="submit">Diagnose Symptoms</button>
      </form>

      {result && (
        <div className="result-card">
          <h2>{result.diagnosis.possible_disease}</h2>
          <p>{result.diagnosis.recommended_solution}</p>
          <p><strong>Expert Case ID:</strong> {result.expert_case.case_id}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomDiagnosis;