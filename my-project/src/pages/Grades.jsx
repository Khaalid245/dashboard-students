// src/pages/Grades.jsx
import React from 'react';

const Grades = () => {
  // Sample data for courses; replace with your own data as needed
  const courses = [
    { id: 1, title: 'HTML & CSS', progress: 100 },
    { id: 2, title: 'JavaScript Essentials', progress: 85 },
    { id: 3, title: 'React for Beginners', progress: 70 },
    { id: 4, title: 'Node.js Basics', progress: 60 },
    { id: 5, title: 'Advanced CSS', progress: 90 },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center text-indigo-700">My Course Progress</h2>
      
      <div className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">{course.title}</h3>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span>Progress: {course.progress}%</span>
                <span className="font-bold">{course.progress === 100 ? 'Completed' : 'In Progress'}</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-indigo-600 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;
