import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import FarmerRegistration from "./pages/FarmerRegistration";
import CropRecommendation from "./pages/CropRecommendation";
import Weather from "./pages/Weather";
import DiseaseDetection from "./pages/DiseaseDetection";
import ExpertDashboard from "./pages/ExpertDashboard";
import SymptomDiagnosis from "./pages/SymptomDiagnosis";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<FarmerRegistration />} />
          <Route path="/crop" element={<CropRecommendation />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/disease" element={<DiseaseDetection />} />
          <Route path="/symptoms" element={<SymptomDiagnosis />} />
          <Route path="/expert" element={<ExpertDashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;