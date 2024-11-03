// src/pages/Profile.jsx
import React, { useState } from 'react';

const Profile = ({ setProfilePicture }) => {
  const [user, setUser] = useState({
    name: "Khalid Abdillahi",
    email: "khalid@example.com",
    enrolledCourses: [
      "HTML & CSS",
      "JavaScript Essentials",
      "React for Beginners"
    ],
    profilePicture: null,
  });

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      setProfilePicture(img); // Update profile picture in App
      setUser({ ...user, profilePicture: img });
    }
  };

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-6 text-3xl font-bold text-indigo-700">Profile</h2>

      <div className="flex items-center p-6 mb-8 bg-white rounded-lg shadow-md">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 border-2 border-indigo-600 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-24 h-24 text-indigo-600 border-2 border-indigo-600 rounded-full">
            No Image
          </div>
        )}
        <div className="ml-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
        </div>
      </div>

      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Personal Information</h3>
        <label className="block mb-2 text-lg">
          Name:
          <input
            type="text"
            value={user.name}
            onChange={handleNameChange}
            className="block w-full p-2 mt-1 border rounded"
          />
        </label>
        <p className="text-lg">Email: {user.email}</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Enrolled Courses</h3>
        <ul className="pl-5 list-disc">
          {user.enrolledCourses.map((course, index) => (
            <li key={index} className="text-lg">{course}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
        <button className="px-4 py-2 ml-4 text-white bg-red-600 rounded-lg hover:bg-red-700">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
