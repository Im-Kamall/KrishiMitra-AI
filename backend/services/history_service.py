import json
import os
from datetime import datetime

DATA_FILE = "data/history.json"

def ensure_file():
    os.makedirs("data", exist_ok=True)

    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, "w") as file:
            json.dump({
                "weather_requests": [],
                "chat_requests": [],
                "image_diagnoses": [],
                "crop_recommendations": []
            }, file, indent=4)

def read_history():
    ensure_file()

    with open(DATA_FILE, "r") as file:
        return json.load(file)

def save_history(data):
    ensure_file()

    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)

def add_history(category, item):
    data = read_history()

    item["created_at"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    data[category].append(item)

    save_history(data)

    return item

def get_stats():
    data = read_history()

    return {
        "weather_requests": len(data["weather_requests"]),
        "chat_requests": len(data["chat_requests"]),
        "image_diagnoses": len(data["image_diagnoses"]),
        "crop_recommendations": len(data["crop_recommendations"]),
        "recent_activity": data
    }