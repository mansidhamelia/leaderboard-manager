Leaderboard Application
This is a Leaderboard Application built with React.js and powered by a mock API using json-server. It allows you to manage users, update their points, and display a leaderboard sorted by points or names.

Features
View Users: Display a list of users with their names, ages, points, and addresses.

Add Users: Add new users to the leaderboard.

Update Points: Increment or decrement a user's points (minimum points: 0).

Delete Users: Remove users from the leaderboard.

Sorting: Sort users by Name (ascending/descending) or Points (descending by default).

Search: Filter users by name.

Pagination: Display 10 users per page.

Getting Started
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/leaderboard-app.git
cd leaderboard-app
Install dependencies:

bash
Copy
npm install
Start the mock API server:

bash
Copy
json-server --watch db.json --port 3051
Start the React application:

bash
Copy
npm start
Open your browser and navigate to:

Copy
http://localhost:3000
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

npm run eject
Note: This is a one-way operation.
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Mock API Endpoints
The mock API is powered by json-server. The following endpoints are available:

GET /users: Get all users.

POST /users: Add a new user.

PATCH /users/:id: Update a user’s points.

DELETE /users/:id: Delete a user.

To start the mock API, run:

bash
Copy
json-server --watch db.json --port 3051
Project Structure
Copy
leaderboard-app/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # Reusable components
│   ├── basecomponents/      # Base UI components (e.g., Table, Pagination)
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   ├── db.json              # Mock database
├── README.md                # Project documentation
├── package.json             # Project dependencies
How to Use
Add a User:

Click the Add User button.

Fill in the user details (Name, Age, Address).

Click Submit to add the user.

Update Points:

Click the + button to increment a user’s points.

Click the - button to decrement a user’s points (minimum: 0).

Delete a User:

Click the Delete button next to a user.

Confirm the deletion in the dialog.

Sort Users:

Click the Name or Points header to sort the table.

Search Users:

Use the search bar to filter users by name.

Pagination:

Navigate through pages using the pagination controls at the bottom of the table.

Technologies Used
React.js: Frontend framework.

Tailwind CSS: Styling and responsive design.

json-server: Mock API for backend simulation.

Axios: HTTP client for API requests.

Contributing
Contributions are welcome! If you’d like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Create React App for bootstrapping the project.

json-server for the mock API.

Tailwind CSS for styling.