from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_crop_image(file_path):
    uploaded_file = client.files.upload(file=file_path)

    prompt = """
    You are an agriculture crop disease expert.

    Analyze this crop image and return:
    1. Possible disease or deficiency
    2. Confidence level
    3. Visible symptoms
    4. Recommended treatment
    5. Preventive care advice

    Keep the answer simple for Indian farmers.
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[prompt, uploaded_file]
    )

    return {
        "ai_diagnosis": response.text
    }