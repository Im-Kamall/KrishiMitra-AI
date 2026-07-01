def recommend_crop(n, p, k, temperature, humidity, ph, rainfall):
    if rainfall > 180 and humidity > 70:
        crop = "Rice"
        reason = "High rainfall and humidity are suitable for rice cultivation."
    elif rainfall < 80 and temperature > 28:
        crop = "Millet"
        reason = "Low rainfall and high temperature are suitable for millet."
    elif ph >= 6 and ph <= 7.5 and rainfall >= 100:
        crop = "Cotton"
        reason = "Balanced pH and moderate rainfall are suitable for cotton."
    elif n > 80 and rainfall > 90:
        crop = "Maize"
        reason = "Good nitrogen and rainfall support maize growth."
    else:
        crop = "Groundnut"
        reason = "Groundnut is suitable for moderate soil and water conditions."

    return {
        "recommended_crop": crop,
        "reason": reason
    }