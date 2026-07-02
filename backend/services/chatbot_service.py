from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def ask_farmer_ai(question, language="English"):
    try:
        prompt = f"""
You are KrishiMitra AI, an agriculture assistant for Indian farmers.

Answer this farmer question in simple {language}.

Question:
{question}

Give:
1. Problem understanding
2. Possible causes
3. Recommended action
4. Prevention tips

Keep the answer practical and farmer-friendly.
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return {
            "success": True,
            "answer": response.text
        }

    except Exception as e:
        return {
            "success": False,
            "answer": f"AI assistant is temporarily unavailable. Please try again later.\n\nDetails: {str(e)}"
        }