// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBook, FaGraduationCap, FaUser, FaFolderOpen, FaCog, FaQuestionCircle, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button 
        className="fixed z-20 flex items-center justify-center text-white bg-indigo-600 rounded-full shadow-lg right top-6 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-10 w-64 p-5 transition-transform duration-300 bg-indigo-100 lg:static lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <h2 className="m-5 mb-4 ml-3 text-lg font-bold text-indigo-700 peer-last">Dashboard Menu</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaBook className="mr-2" />
              Courses
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/grades" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaGraduationCap className="mr-2" />
              Grades
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaUser className="mr-2" />
              Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/resources" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaFolderOpen className="mr-2" />
              Resources
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/help-center" className="flex items-center p-2 text-indigo-600 rounded hover:bg-indigo-200">
              <FaQuestionCircle className="mr-2" />
              Help Center
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
