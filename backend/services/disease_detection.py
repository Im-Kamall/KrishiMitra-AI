def diagnose_crop_disease(symptoms):
    symptoms = symptoms.lower()

    if "yellow" in symptoms or "પીળા" in symptoms:
        disease = "Nitrogen Deficiency"
        solution = "Apply nitrogen-rich fertilizer like urea in recommended quantity."

    elif "white spots" in symptoms or "spots" in symptoms:
        disease = "Powdery Mildew"
        solution = "Use organic fungicide or sulfur-based spray."

    elif "brown" in symptoms or "dry leaves" in symptoms:
        disease = "Leaf Blight"
        solution = "Remove infected leaves and apply copper-based fungicide."

    elif "insect" in symptoms or "pest" in symptoms:
        disease = "Pest Attack"
        solution = "Use neem oil spray or consult nearby agriculture expert."

    else:
        disease = "Unknown Issue"
        solution = "Please upload a clear crop image or contact Rythu Seva Kendra expert."

    return {
        "possible_disease": disease,
        "recommended_solution": solution
    }