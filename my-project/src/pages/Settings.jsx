// src/pages/Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-indigo-700">Settings</h2>
      
      {/* Account Settings Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="text-lg font-medium">Username</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-md"
              defaultValue="Khalid Abdillahi"
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-md"
              defaultValue="khalid@example.com"
            />
          </div>
          <div className="flex justify-between">
            <label className="text-lg font-medium">Change Password</label>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg">Email Notifications</span>
            <input type="checkbox" className="w-6 h-6" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">SMS Notifications</span>
            <input type="checkbox" className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">Push Notifications</span>
            <input type="checkbox" className="w-6 h-6" defaultChecked />
          </div>
        </div>
      </div>

      {/* Appearance Settings Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">Appearance Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg">Font Size</span>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">Theme Color</span>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>Indigo</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Save Changes Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
