from database import farmers_collection

def register_farmer(name, phone, village, language, crop, soil_type):
    farmer = {
        "name": name,
        "phone": phone,
        "village": village,
        "language": language,
        "crop": crop,
        "soil_type": soil_type
    }

    result = farmers_collection.insert_one(farmer)
    farmer["_id"] = str(result.inserted_id)

    return farmer


def get_all_farmers():
    farmers = []

    for farmer in farmers_collection.find():
        farmer["_id"] = str(farmer["_id"])
        farmers.append(farmer)

    return farmers