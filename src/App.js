import './App.css';
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Switch from './components/baseComponents/BaseSwitchComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = (enabled) => {
    setIsDarkMode(enabled);
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App  max-w-screen-lg mx-auto px-8">

      <div className="fixed top-4 right-4">
        {/* <Switch checked={isDarkMode} onChange={toggleDarkMode} /> */}
      </div>
      <UserList />
    </div>
  );
}

export default App;
