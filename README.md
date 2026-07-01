<div align="center">

# 🌾 KrishiMitra AI

### AI-Powered Smart Agriculture Intelligence Platform

#### Empowering Farmers with Artificial Intelligence, Weather Intelligence, Computer Vision & Cloud Technologies

![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

### 🌍 Supporting Sustainable Agriculture Through AI

*"Helping Small & Marginal Farmers Make Smarter Decisions."*

</div>

---

# 📖 Overview

KrishiMitra AI is an intelligent agriculture platform built to assist farmers with **AI-powered crop recommendations, disease diagnosis, weather-based advisories, and expert consultation**.

The platform combines **Artificial Intelligence, Machine Learning, Computer Vision, Weather Intelligence, Cloud Database, and Modern Web Technologies** to provide real-time agricultural assistance.

Designed especially for **small and marginal farmers**, KrishiMitra AI aims to improve productivity, reduce crop losses, and promote data-driven farming practices.

---

# 🚨 Problem Statement

Farmers often suffer crop losses because of:

- Poor crop selection
- Unpredictable monsoon patterns
- Lack of localized weather intelligence
- Delayed crop disease detection
- Limited access to agricultural experts
- Traditional decision-making without scientific data

These challenges result in:

- Reduced crop yield
- Increased production costs
- Water wastage
- Financial losses

---

# 💡 Solution

KrishiMitra AI provides an integrated AI ecosystem that helps farmers by offering:

✅ Smart Crop Recommendation

✅ AI Disease Detection

✅ Weather-based Farming Advisory

✅ Expert Consultation

✅ Cloud-based Farmer Management

✅ Future-ready Voice & SMS Support

---

# ✨ Key Features

## 👨‍🌾 Farmer Registration

- Register farmer profile
- Village information
- Preferred language
- Soil type
- Current crop

---

## 🌱 Smart Crop Recommendation

AI recommends crops using:

- Nitrogen
- Phosphorus
- Potassium
- Temperature
- Humidity
- Rainfall
- Soil pH

---

## 🌦 Weather Advisory

Provides recommendations for:

- Irrigation
- Fertilizer application
- Dry spell alerts
- Weather warnings

---

## 🦠 Symptom-based Disease Diagnosis

Farmers can describe symptoms like:

> Leaves turning yellow

AI identifies:

- Possible disease
- Nutrient deficiency
- Treatment
- Prevention

---

## 📷 AI Crop Image Diagnosis

Upload crop images.

Google Gemini Vision analyzes:

- Disease
- Confidence
- Symptoms
- Treatment
- Prevention

---

## 🧑‍💼 Expert Dashboard

Agriculture experts can:

- Review submitted cases
- Monitor disease reports
- Update treatment status
- Manage farmer requests

---

## ☁ Cloud Database

MongoDB Atlas stores:

- Farmer profiles
- Expert cases
- Disease reports

---

# 🏗 System Architecture

```text
                    Farmer

                      │

                      ▼

          React Frontend (Vite)

                      │

              REST API (Axios)

                      │

                      ▼

           FastAPI Backend Server

                      │

      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼

Crop AI        Gemini Vision      Weather AI

      │               │                │

      └───────────────┼────────────────┘

                      ▼

              MongoDB Atlas Cloud
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- React Router
- CSS3

---

## Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

---

## Database

- MongoDB Atlas
- PyMongo

---

## Artificial Intelligence

- Google Gemini AI
- Gemini Vision
- Machine Learning

---

## Development Tools

- VS Code
- Git
- GitHub
- Swagger UI
- Postman

---

# 📂 Project Structure

```text
KrishiMitra-AI

backend/
│
├── services/
├── uploads/
├── database.py
├── main.py
├── requirements.txt
└── .env

frontend/
│
├── src/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── App.css
│
├── package.json
└── vite.config.js

README.md
```

---

# 📸 Screenshots

## Dashboard

<img src="assets/dashboard.png" width="900"/>

---

## Farmer Registration

<img src="assets/register.png" width="900"/>

---

## Crop Recommendation

<img src="assets/crop.png" width="900"/>

---

## Disease Detection

<img src="assets/disease.png" width="900"/>

---

## Expert Dashboard

<img src="assets/expert.png" width="900"/>

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/KrishiMitra-AI.git

cd KrishiMitra-AI
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

Swagger:

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|----------|-----------------------------|------------------------|
| GET | / | Home |
| GET | /health | Health Check |
| POST | /register-farmer | Register Farmer |
| GET | /farmers | Get Farmers |
| POST | /recommend-crop | Crop Recommendation |
| POST | /weather-advisory | Weather Advisory |
| POST | /crop-disease-diagnosis | Symptom Diagnosis |
| POST | /crop-image-diagnosis | Image Diagnosis |
| GET | /expert-cases | Expert Cases |
| PUT | /expert-cases/update-status | Update Case Status |

---

# 🔮 Future Roadmap

- Voice Assistant
- SMS Notifications
- Real-time Weather API
- Satellite Data
- Soil Sensor Integration
- Government Scheme Recommendation
- Mobile Application
- Offline SMS Support
- Multi-language AI Assistant

---

# 🌍 Impact

KrishiMitra AI aims to:

- Improve Crop Yield
- Reduce Crop Losses
- Promote Precision Farming
- Support Sustainable Agriculture
- Increase Farmer Income
- Enable Data-driven Decisions

---

# 🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Submit a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

### 🌾 Built with ❤️ for Farmers

*"Technology for Sustainable Agriculture."*

⭐ If you like this project, don't forget to star the repository!

</div>