📌 Leaderboard Manager
A simple leaderboard application that allows users to be added, removed, and updated dynamically while maintaining a real-time sorted leaderboard.

🚀 Live Demo
🌍 Frontend: https://your-live-link.com
🌍 API (Mock JSON Server): https://your-api-link.com

📂 Project Setup & Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/leaderboard-manager.git
cd leaderboard-manager
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start the Mock API Server
The project uses a JSON server as a mock API. To start it, run:

bash
Copy
Edit
json-server --watch db.json --port 3051
Mock API will be available at: http://localhost:3051

4️⃣ Start the Frontend
bash
Copy
Edit
npm start
Now, open your browser and visit: http://localhost:3000

🎯 Features
✅ Add new users
✅ Increase or decrease user points dynamically
✅ Automatically reorders users based on score
✅ Delete users from the leaderboard
✅ Click on a user to view detailed information
✅ Search and filter users by name
✅ Sort leaderboard by name or points

📌 API Endpoints (Mock Server)
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Add a new user
PATCH	/users/:id	Update a user's points
DELETE	/users/:id	Remove a user from the leaderboard
Example API Request (Add a User)
json
Copy
Edit
POST /users
{
  "name": "John Doe",
  "age": 25,
  "points": 0,
  "address": "123 Street, City"
}
Example API Request (Update Points)
json
Copy
Edit
PATCH /users/1
{
  "points": 10
}
📌 Available Scripts
Command	Description
npm start	Runs the app in development mode (http://localhost:3000)
npm run build	Builds the app for production
json-server --watch db.json --port 3051	Starts the mock API at http://localhost:3051
🛠 Deployment
To deploy your application:

Build the project:
bash
Copy
Edit
npm run build
Deploy the /build folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.).