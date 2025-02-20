import './App.css';
import React, { useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
