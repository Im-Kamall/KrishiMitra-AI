from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="KrishiMitra AI Backend",
    description="Backend API for KrishiMitra AI project",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://krishi-mitra-ai-red.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "KrishiMitra AI Backend is running successfully",
        "status": "active"
    }

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "backend": "running"
    }

@app.get("/api")
def api_status():
    return {
        "message": "KrishiMitra AI API is working"
    }

@app.post("/predict")
def predict(data: dict):
    return {
        "message": "Prediction endpoint is working",
        "received_data": data
    }

@app.post("/chat")
def chat(data: dict):
    user_message = data.get("message", "")

    return {
        "reply": f"KrishiMitra AI received your message: {user_message}"
    }

@app.post("/crop-recommendation")
def crop_recommendation(data: dict):
    return {
        "message": "Crop recommendation endpoint is working",
        "received_data": data,
        "recommendation": "Please connect ML model for final crop recommendation"
    }

@app.post("/disease-detection")
def disease_detection(data: dict):
    return {
        "message": "Disease detection endpoint is working",
        "received_data": data,
        "result": "Please connect disease detection model"
    }