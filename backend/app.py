import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load schemes from JSON
with open("schemes.json", "r", encoding="utf-8") as f:
    schemes = json.load(f)

@app.route("/match", methods=["POST"])
def find_schemes():
    user = request.json

    # Normalize user inputs
    user_data = {
        "age": int(user.get("age", 0)),
        "gender": user.get("gender", "").strip().lower(),
        "income": int(user.get("income", 0)),
        "numChildren": int(user.get("numChildren", 0)),
        "profession": user.get("profession", "").strip().lower(),
        "state": user.get("state", "").strip().lower(),
        "category": user.get("category", "").strip().lower()
    }

    matched_schemes = []

    for scheme in schemes:
        eligibility = scheme.get("eligibility", {})
        eligible = True

        # If eligibility is empty, skip unless you want truly universal schemes
        if not eligibility:
            continue

        # Age (support both formats)
        if "age" in eligibility:
            min_age = eligibility["age"].get("min", 0)
            max_age = eligibility["age"].get("max", 200)
            if not (min_age <= user_data["age"] <= max_age):
                eligible = False
        else:
            min_age = eligibility.get("min_age")
            max_age = eligibility.get("max_age")
            if min_age is not None and user_data["age"] < min_age:
                eligible = False
            if max_age is not None and user_data["age"] > max_age:
                eligible = False

        # Gender
        if "gender" in eligibility:
            if user_data["gender"] not in [g.lower() for g in eligibility["gender"]]:
                eligible = False

        # Income
        if "income" in eligibility:
            if user_data["income"] > eligibility["income"].get("max", float("inf")):
                eligible = False

        # Min children
        if "min_children" in eligibility:
            if user_data["numChildren"] < eligibility["min_children"]:
                eligible = False

        # Profession
        if "profession" in eligibility:
            if user_data["profession"] not in [p.lower() for p in eligibility["profession"]]:
                eligible = False

        # State
        if "state" in eligibility:
            if user_data["state"] not in [s.lower() for s in eligibility["state"]]:
                eligible = False

        # Category
        if "category" in eligibility:
            if user_data["category"] not in [c.lower() for c in eligibility["category"]]:
                eligible = False

        if eligible:
            matched_schemes.append(scheme)

    return jsonify({"schemes": matched_schemes})


if __name__ == "__main__":
    app.run(debug=True)
