def get_weather_advisory(temperature, humidity, rainfall_chance, wind_speed):
    if rainfall_chance >= 70:
        advisory = "Rain expected soon. Do not irrigate today."
        alert_type = "Rain Alert"

    elif temperature >= 35 and humidity < 40:
        advisory = "High temperature and low humidity. Irrigate early morning or evening."
        alert_type = "Heat Stress Alert"

    elif rainfall_chance <= 20:
        advisory = "Low rainfall chance. Monitor soil moisture and plan irrigation."
        alert_type = "Dry Spell Alert"

    else:
        advisory = "Weather is normal. Continue regular crop care."
        alert_type = "Normal Advisory"

    return {
        "alert_type": alert_type,
        "advisory": advisory,
        "temperature": temperature,
        "humidity": humidity,
        "rainfall_chance": rainfall_chance,
        "wind_speed": wind_speed
    }