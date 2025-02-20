import './App.css';
import React, { useState } from "react";
import UserList from "./components/UserList";

function App() {
  // const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
