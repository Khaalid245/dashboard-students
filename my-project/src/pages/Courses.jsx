// src/pages/Courses.jsx
import React, { useState } from 'react';
import FrontEnd from '../assets/frontend.jpeg';
import BackEnd from '../assets/backend.jpeg';
import DataAnly from '../assets/data.jpeg';
import GraphicDesign from '../assets/images.jpeg';
import KhalidTeacher from '../assets/khalid.jpeg'
import PublicSpeaking from '../assets/public.png';
import Datascience from '../assets/python.jpg'
import { FaStar, FaSearch } from 'react-icons/fa';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  // Expanded course data with additional courses
  const courses = [
    {
      id: 1,
      title: "Front end",
      description: "Learn the fundamentals of HTML, CSS,Botstrap and javascript to build beautiful web pages.",
      duration: "4 Weeks",
      level: "Beginner",
      category: "Frontend",
      rating: 4,
      instructor: { name: "Khalid", profileImg: FrontEnd },
      image: FrontEnd,
    },
    {
      id: 2,
      title: "Back end ",
      description: "Understand the basics of Node.js and msql.",
      duration: "6 Weeks",
      level: "Intermediate",
      category: "Back end",
      rating: 5,
      instructor: { name: "Khalid", profileImg: BackEnd },
      image: BackEnd,
    },
    {
      id: 3,
      title: "Data anlytics ",
      description: "Dive into analysis of data with using excel .",
      duration: "8 Weeks",
      level: "Begginer",
      category: "Frontend",
      rating: 4,
      instructor: { name: "Hamse", profileImg: DataAnly },
      image: DataAnly,
    },
    {
      id: 4,
      title: "Graphic Design Basics",
      description: "Master the fundamentals of graphic design and visual creativity.",
      duration: "5 Weeks",
      level: "Beginner",
      category: "Design",
      rating: 4,
      instructor: { name: "Mubarak", profileImg: GraphicDesign },
      image: GraphicDesign,
    },
    {
      id: 5,
      title: "Data science with Python",
      description: "Gain insights from data by learning Python's powerful analysis libraries, plus we will learn python.",
      duration: "6 Weeks",
      level: "Intermediate",
      category: "Data Science",
      rating: 5,
      instructor: { name: "Hamse", profileImg: DataAnly },
      image: Datascience,
    },
    {
      id: 6,
      title: "Public Speaking Mastery",
      description: "Build confidence and skills for effective public speaking.",
      duration: "3 Weeks",
      level: "Beginner",
      category: "Soft Skills",
      rating: 4,
      instructor: { name: "mubarak", profileImg: PublicSpeaking },
      image: PublicSpeaking,
    },
  ];

  // Filtering logic
  const filteredCourses = courses.filter(course =>
    (category === 'All' || course.category === category) &&
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="mb-8 text-4xl font-bold text-center text-indigo-700">Explore Our Courses</h2>

      {/* Search and Filter */}
      <div className="flex flex-col items-center mb-8 space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="relative w-full sm:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute text-gray-400 right-3 top-3" />
        </div>
        
        <div className="w-full sm:w-1/4 lg:w-1/6">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Soft Skills">Soft Skills</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="p-6 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <img src={course.image} alt={course.title} className="object-cover w-full h-40 mb-4 rounded-lg" />
            
            <h3 className="text-xl font-semibold text-indigo-600">{course.title}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <span>Duration: {course.duration}</span>
              <span>Level: {course.level}</span>
            </div>

            {/* Instructor and Rating */}
            <div className="flex items-center mt-4">
              <img src={course.instructor.profileImg} alt={course.instructor.name} className="w-8 h-8 mr-2 rounded-full" />
              <span className="text-gray-700">{course.instructor.name}</span>
            </div>
            
            <div className="flex mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={`text-yellow-400 ${i < course.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-4 text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
