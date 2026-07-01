import { useEffect, useState } from "react";
import api from "../services/api";

function ExpertDashboard() {
  const [cases, setCases] = useState([]);

  const loadCases = async () => {
    try {
      const response = await api.get("/expert-cases");
      setCases(response.data.cases);
    } catch (error) {
      console.error(error);
      alert("Failed to load expert cases.");
    }
  };

  const updateStatus = async (caseId, status) => {
    try {
      await api.put("/expert-cases/update-status", {
        case_id: caseId,
        status: status,
      });

      loadCases();
    } catch (error) {
      console.error(error);
      alert("Failed to update case.");
    }
  };

  useEffect(() => {
    loadCases();
  }, []);

  return (
    <div className="page">
      <h1>🧑‍💼 Expert Dashboard</h1>

      {cases.length === 0 ? (
        <p>No expert cases found.</p>
      ) : (
        <div className="case-list">
          {cases.map((item) => (
            <div className="result-card" key={item.case_id}>
              <h2>Case #{item.case_id}</h2>

              <p>
                <strong>Farmer:</strong> {item.farmer_name}
              </p>

              <p>
                <strong>Crop:</strong> {item.crop_name}
              </p>

              <p>
                <strong>Symptoms:</strong> {item.symptoms}
              </p>

              <p>
                <strong>Disease:</strong>{" "}
                {item.diagnosis.possible_disease}
              </p>

              <p>
                <strong>Solution:</strong>{" "}
                {item.diagnosis.recommended_solution}
              </p>

              <p>
                <strong>Status:</strong> {item.status}
              </p>

              <button
                onClick={() =>
                  updateStatus(item.case_id, "In Review")
                }
              >
                In Review
              </button>

              <button
                onClick={() =>
                  updateStatus(item.case_id, "Resolved")
                }
              >
                Resolved
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpertDashboard;