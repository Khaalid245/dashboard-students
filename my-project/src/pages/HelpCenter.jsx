// src/pages/HelpCenter.jsx
import React, { useState } from 'react';

const HelpCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      issue: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-6 text-3xl font-bold text-indigo-700">Help Center</h2>
      
      {/* FAQ Section */}
      <div className="mb-8">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">Frequently Asked Questions</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-semibold">How do I reset my password?</h4>
            <p className="text-gray-700">Go to Settings &gt; Account Settings and click on "Update Password".</p>
          </li>
          <li>
            <h4 className="font-semibold">How can I contact support?</h4>
            <p className="text-gray-700">Fill out the contact form below, and our team will respond within 24 hours.</p>
          </li>
          <li>
            <h4 className="font-semibold">Where can I find my course progress?</h4>
            <p className="text-gray-700">Your course progress is available on the Grades page in your Dashboard.</p>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-lg font-medium">Issue</label>
            <select
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select an issue</option>
              <option value="Account Issue">Account Issue</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Billing Issue">Billing Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-lg font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;
