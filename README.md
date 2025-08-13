Sahay Sarthi
Sahay Sarthi is a local web application that helps users find matching government schemes based on their profile, such as age, gender, profession, income, and number of children. This project is designed to assist people, especially farmers and other underserved communities, in discovering schemes they are eligible for—without requiring internet access for AI-based suggestions.

Features
Enter your personal profile: age, gender, state, profession, income, number of children.

Get a list of government schemes you are eligible for.

Fully local: runs offline with Flask backend and React frontend.

Easy to deploy and extend for future AI integration.

Responsive and beginner-friendly interface.

Folder Structure:
sahay-sarthi/
├── backend/
│   ├── app.py             # Flask backend API
│   ├── schemes.json       # JSON file with government schemes
│   └── venv/              # Python virtual environment (ignored in Git)
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.js
    │   │   ├── ProfileForm.js
    │   │   └── SchemeCard.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── node_modules/      # ignored in Git

Installation
Clone the repository:

bgit clone <your-github-repo-url>
cd sahay-sarthi



Backend Setup:
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt



Frontend Setup:
cd ../frontend
npm install
npm start

Run the backend server:
cd ../frontend
npm install
npm start

Frontend will run on http://localhost:3000 and backend on http://127.0.0.1:5000.

Usage
Open the frontend in your browser: http://localhost:3000.

Fill in your profile form with the relevant details.

Click Find Schemes.

View the list of matching government schemes along with their benefits and application links.

Contributing
This project is open for contributions!

Future updates may include AI-based suggestions, SMS notifications, and offline data collection for rural users.

Feel free to submit PRs or suggest new features.


## Future Plans

- Integrate AI suggestions to recommend the best schemes automatically.
- Enable offline data collection for farmers and other users without internet.
- Send SMS notifications to users about suitable schemes using free APIs.
- Collaborate with local government e-cafes like Akshaya in Kerala to help users apply.


License
MIT License © 2025

