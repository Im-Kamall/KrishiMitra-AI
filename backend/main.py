import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from database import db

from services.crop_recommendation import recommend_crop
from services.weather_advisory import get_weather_advisory
from services.disease_detection import diagnose_crop_disease
from services.farmer_service import register_farmer, get_all_farmers
from services.expert_case_service import (
    create_expert_case,
    get_all_cases,
    update_case_status,
)
from services.image_diagnosis import analyze_crop_image
from services.live_weather_service import get_live_weather
from services.chatbot_service import ask_farmer_ai
from services.history_service import add_history, get_stats


app = FastAPI(
    title="KrishiMitra AI Backend",
    version="1.0.0",
    description="AI-powered smart agriculture platform backend",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://krishi-mitra-ai-red.vercel.app",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CropInput(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


class WeatherInput(BaseModel):
    temperature: float
    humidity: float
    rainfall_chance: float
    wind_speed: float


class LiveWeatherInput(BaseModel):
    city: str


class DiseaseInput(BaseModel):
    farmer_name: str
    crop_name: str
    symptoms: str
    language: str = "English"


class FarmerInput(BaseModel):
    name: str
    phone: str
    village: str
    language: str
    crop: str
    soil_type: str


class CaseStatusInput(BaseModel):
    case_id: str
    status: str


class ChatbotInput(BaseModel):
    question: str
    language: str = "English"


@app.get("/")
def home():
    return {
        "message": "KrishiMitra AI Backend is running successfully",
        "docs": "/docs",
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "backend": "running",
        "project": "KrishiMitra AI",
    }


@app.get("/analytics")
def analytics():
    stats = get_stats()
    return {
        "status": "success",
        "analytics": stats,
    }


@app.post("/register-farmer")
def register_farmer_api(data: FarmerInput):
    farmer = register_farmer(
        data.name,
        data.phone,
        data.village,
        data.language,
        data.crop,
        data.soil_type,
    )

    return {
        "status": "success",
        "message": "Farmer registered successfully",
        "farmer": farmer,
    }


@app.get("/farmers")
def farmers():
    farmer_list = get_all_farmers()

    return {
        "status": "success",
        "total_farmers": len(farmer_list),
        "farmers": farmer_list,
    }


@app.post("/recommend-crop")
def crop_recommendation(data: CropInput):
    result = recommend_crop(
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall,
    )

    add_history(
        "crop_recommendations",
        {
            "input": data.model_dump(),
            "result": result,
        },
    )

    return {
        "status": "success",
        "input": data.model_dump(),
        "recommendation": result,
    }


@app.post("/weather-advisory")
def weather_advisory(data: WeatherInput):
    result = get_weather_advisory(
        data.temperature,
        data.humidity,
        data.rainfall_chance,
        data.wind_speed,
    )

    return {
        "status": "success",
        "weather_advisory": result,
    }


@app.post("/live-weather")
def live_weather(data: LiveWeatherInput):
    result = get_live_weather(data.city)

    add_history(
        "weather_requests",
        {
            "city": data.city,
            "result": result,
        },
    )

    return {
        "status": "success" if result.get("success") else "error",
        "live_weather": result,
    }


@app.post("/crop-disease-diagnosis")
def crop_disease_diagnosis(data: DiseaseInput):
    result = diagnose_crop_disease(data.symptoms)

    expert_case = create_expert_case(
        data.farmer_name,
        data.crop_name,
        data.symptoms,
        result,
    )

    return {
        "status": "success",
        "farmer_name": data.farmer_name,
        "crop_name": data.crop_name,
        "language": data.language,
        "diagnosis": result,
        "expert_case": expert_case,
    }


@app.post("/crop-image-diagnosis")
async def crop_image_diagnosis(file: UploadFile = File(...)):
    os.makedirs("uploads", exist_ok=True)

    file_location = f"uploads/{file.filename}"

    with open(file_location, "wb") as image_file:
        image_file.write(await file.read())

    result = analyze_crop_image(file_location)

    add_history(
        "image_diagnoses",
        {
            "filename": file.filename,
            "result": result,
        },
    )

    return {
        "status": "success",
        "message": "Crop image uploaded and analyzed successfully",
        "diagnosis": result,
    }


@app.post("/ask-ai")
def ask_ai(data: ChatbotInput):
    result = ask_farmer_ai(data.question, data.language)

    add_history(
        "chat_requests",
        {
            "question": data.question,
            "language": data.language,
            "answer": result.get("answer"),
        },
    )

    return {
        "status": "success" if result.get("success") else "error",
        "response": result,
    }


@app.get("/expert-cases")
def expert_cases():
    cases = get_all_cases()

    return {
        "status": "success",
        "total_cases": len(cases),
        "cases": cases,
    }


@app.put("/expert-cases/update-status")
def expert_case_status_update(data: CaseStatusInput):
    updated_case = update_case_status(data.case_id, data.status)

    if updated_case is None:
        return {
            "status": "error",
            "message": "Case not found",
        }

    return {
        "status": "success",
        "message": "Case status updated",
        "case": updated_case,
    }