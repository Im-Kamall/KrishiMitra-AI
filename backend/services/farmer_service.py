from database import farmers_collection

local_farmers = []


def register_farmer(name, phone, village, language, crop, soil_type):
    farmer = {
        "name": name,
        "phone": phone,
        "village": village,
        "language": language,
        "crop": crop,
        "soil_type": soil_type
    }

    if farmers_collection is not None:
        result = farmers_collection.insert_one(farmer)
        farmer["_id"] = str(result.inserted_id)
    else:
        farmer["_id"] = str(len(local_farmers) + 1)
        local_farmers.append(farmer)

    return farmer


def get_all_farmers():
    if farmers_collection is not None:
        farmers = []

        for farmer in farmers_collection.find():
            farmer["_id"] = str(farmer["_id"])
            farmers.append(farmer)

        return farmers

    return local_farmers