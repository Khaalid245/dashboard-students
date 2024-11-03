// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ profilePicture }) => {
  return (
    <header className="p-4 text-white bg-indigo-600">
      <div className="container flex items-center justify-between mx-auto ">
        <h1 className="flex items-center ml-3 text-sm font-bold md:text-xl">Student Dashboard</h1>
        <div className="flex items-center">
        
          <Link to="/" className="px-4 text-sm hover:underline md:text-base">Home</Link>
          <Link to="/profile" className="px-4 text-sm hover:underline md:text-base">Profile</Link>
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-10 h-10 mr-2 border border-white rounded-full"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
