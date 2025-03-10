#  Leaderboard Manager  
A simple leaderboard application that allows users to be added, removed, and updated dynamically while maintaining a real-time sorted leaderboard.

---

##  Live Demo  

 **Frontend:** [leaderboard-manager](https://mansidhamelia.github.io/leaderboard-manager/)  
 **API (Mock JSON Server):** [json-server-api](https://json-server-api-qd86.onrender.com)  

---

## Project Setup & Installation  

### 1️ Clone the Repository  

`git clone https://github.com/mansidhamelia/leaderboard-manager.git`
`cd leaderboard-manager`

### 2️ Install Dependencies

`npm install`


### 3️ Start the Mock API Server
The project uses a JSON server as a mock API. To start it, run:

`json-server --watch db.json --port 3051`

To use the deployed API, update frontend API URL to:

`https://json-server-api-qd86.onrender.com`

Mock API will be available at: http://localhost:3051

### 4️ Start the Frontend

`npm run start`

Now, open your browser and visit: http://localhost:3000

 Features
 1. Add new users
 2. Increase or decrease user points dynamically
 3. Automatically reorders users based on score
 4. Delete users from the leaderboard
 5. Click on a user to view detailed information
 6. Search and filter users by name
 7. Sort leaderboard by name or points

---
 API Endpoints (Mock Server)
Method	Endpoint	Description
GET	    /users	    Get all users
POST	/users	    Add a new user
PATCH	/users/:id	Update a user's points
DELETE	/users/:id	Remove a user from the leaderboard

| Method  | Endpoint      | Description                   |
|---------|--------------|-------------------------------|
| **GET**  | `/users`      | Get all users                |
| **POST** | `/users`      | Add a new user               |
| **PATCH** | `/users/:id`  | Update a user's points       |
| **DELETE** | `/users/:id`  | Remove a user from the leaderboard |

---
Example API Request (Add a User)

`json
POST /users
{
  "name": "John Doe",
  "age": 25,
  "points": 0,
  "address": "123 Street, City"
}`

Example API Request (Update Points)

`json
PATCH /users/1
{
  "points": 10
}`

 Available Scripts

| Command	         | Description                   |
|--------- | -------------------------------|
| **npm start**     |  Runs the app in development mode (http://localhost:3000)                |
| **npm run build**     |  Builds the app for production               |
| **json-server --watch db.json --port 3051** |  Starts the mock API at http://localhost:3051       |



Deployment
To deploy your application:

1. Build the project:

`npm run build`

2. Deploy the `/build` folder to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.).
