from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from urllib.parse import quote_plus
import os

load_dotenv()

username = "solankikamal754_db_user"

password = quote_plus(os.getenv("MONGODB_PASSWORD"))

uri = f"mongodb+srv://{username}:{password}@cluster0.acbikli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri, server_api=ServerApi("1"))

client.admin.command("ping")

print("✅ Connected to MongoDB Atlas")

db = client["KrishiMitraAI"]

farmers_collection = db["farmers"]
expert_cases_collection = db["expert_cases"]