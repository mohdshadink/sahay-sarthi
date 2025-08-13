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
    matched_schemes = []

    for scheme in schemes:
        eligible = True
        eligibility = scheme.get("eligibility", {})

        # Check age
        age_req = eligibility.get("age")
        if age_req:
            if not (age_req.get("min", 0) <= int(user.get("age", 0)) <= age_req.get("max", 100)):
                eligible = False

        # Check gender
        gender_req = eligibility.get("gender")
        if gender_req:
            if user.get("gender") not in gender_req:
                eligible = False

        # Check min_children
        min_children = eligibility.get("min_children")
        if min_children:
            if int(user.get("numChildren", 0)) < min_children:
                eligible = False

        # Check income
        income_req = eligibility.get("income")
        if income_req:
            if int(user.get("income", 0)) > income_req.get("max", float("inf")):
                eligible = False

        # Check category (optional)
        category_req = eligibility.get("category")
        if category_req:
            if user.get("category") not in category_req:
                eligible = False

        if eligible:
            matched_schemes.append(scheme)

    return jsonify({"schemes": matched_schemes})


if __name__ == "__main__":
    app.run(debug=True)
