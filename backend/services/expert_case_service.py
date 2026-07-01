from database import expert_cases_collection
from bson import ObjectId


def create_expert_case(farmer_name, crop_name, symptoms, diagnosis):
    case = {
        "farmer_name": farmer_name,
        "crop_name": crop_name,
        "symptoms": symptoms,
        "diagnosis": diagnosis,
        "status": "Pending Expert Review"
    }

    result = expert_cases_collection.insert_one(case)
    case["_id"] = str(result.inserted_id)

    return case


def get_all_cases():
    cases = []

    for case in expert_cases_collection.find():
        case["_id"] = str(case["_id"])
        cases.append(case)

    return cases


def update_case_status(case_id, status):
    result = expert_cases_collection.update_one(
        {"_id": ObjectId(case_id)},
        {"$set": {"status": status}}
    )

    if result.matched_count == 0:
        return None

    updated_case = expert_cases_collection.find_one({"_id": ObjectId(case_id)})
    updated_case["_id"] = str(updated_case["_id"])

    return updated_case