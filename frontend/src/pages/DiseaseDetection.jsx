import { useState } from "react";
import api from "../services/api";

function DiseaseDetection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
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
      const res = await api.post("/crop-image-diagnosis", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data.diagnosis);
    } catch (error) {
      alert("Image diagnosis failed");
    }
  };

  return (
    <div className="page">
      <h1>📷 Crop Disease Detection</h1>

      <form onSubmit={diagnoseImage} className="form">
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && (
          <img
            src={preview}
            alt="Crop Preview"
            style={{
              width: "250px",
              borderRadius: "12px",
              marginTop: "15px",
            }}
          />
        )}

        <button type="submit">Diagnose Crop Image</button>
      </form>

      {result && (
        <div className="result-card">
          <h2>Disease: {result.possible_disease}</h2>
          <p><strong>Confidence:</strong> {result.confidence}</p>
          <p><strong>Solution:</strong> {result.recommended_solution}</p>
          <p>{result.note}</p>
        </div>
      )}
    </div>
  );
}

export default DiseaseDetection;