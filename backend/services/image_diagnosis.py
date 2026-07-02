from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def analyze_crop_image(file_path):
    try:
        uploaded_file = client.files.upload(file=file_path)

        prompt = """
You are an expert agricultural scientist.

Analyze this crop image.

Return:

Disease:
Confidence:
Symptoms:
Treatment:
Prevention:

Keep the explanation simple for Indian farmers.
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[uploaded_file, prompt]
        )

        return {
            "success": True,
            "diagnosis": response.text
        }

    except Exception as e:
        return {
            "success": False,
            "diagnosis": f"Gemini AI is temporarily unavailable. Please try again after some time.\n\nDetails: {str(e)}"
        }