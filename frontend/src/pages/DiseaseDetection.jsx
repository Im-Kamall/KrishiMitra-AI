import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function DiseaseDetection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult("");
  };

  const diagnoseImage = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post("/crop-image-diagnosis", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data.diagnosis.diagnosis);
    } catch (error) {
      alert("Image diagnosis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <h1>📷 AI Crop Image Diagnosis</h1>

      <div className="upload-box">
        <form onSubmit={diagnoseImage} className="form">
          <input type="file" accept="image/*" onChange={handleFileChange} />

          {preview && (
            <img src={preview} alt="Crop preview" className="preview-img" />
          )}

          <button type="submit" disabled={loading}>
            {loading ? "🤖 Analyzing with Gemini AI..." : "Diagnose Crop Image"}
          </button>
        </form>
      </div>

      {result && (
        <div className="ai-report">
          <h2>🤖 Gemini AI Diagnosis Report</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default DiseaseDetection;