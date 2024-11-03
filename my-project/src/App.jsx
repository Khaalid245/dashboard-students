// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Courses from './pages/Courses';
import Grades from './pages/Grades';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';

const App = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <div className="flex flex-col h-screen">
      <Header profilePicture={profilePicture} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/profile" element={<Profile setProfilePicture={setProfilePicture} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
