// src/pages/Resources.jsx
import React from 'react';

const Resources = () => {
  const articles = [
    { title: "Understanding React Basics", link: "https://reactjs.org/docs/getting-started.html" },
    { title: "A Guide to Modern JavaScript", link: "https://javascript.info/" },
  ];

  const videos = [
    { title: "Intro to HTML & CSS", link: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
    { title: "JavaScript Essentials", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
  ];

  const downloads = [
    { title: "CSS Cheat Sheet", link: "/downloads/css-cheat-sheet.pdf" },
    { title: "JavaScript Quick Reference", link: "/downloads/js-quick-reference.pdf" },
  ];

  const usefulLinks = [
    { title: "MDN Web Docs", link: "https://developer.mozilla.org/en/" },
    { title: "W3Schools", link: "https://www.w3schools.com/" },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="mb-6 text-3xl font-bold text-indigo-700">Resources</h2>

      {/* Articles Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Articles</h3>
        <ul className="pl-5 list-disc">
          {articles.map((article, index) => (
            <li key={index}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Videos Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Videos</h3>
        <ul className="pl-5 list-disc">
          {videos.map((video, index) => (
            <li key={index}>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Downloadable Files Section */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Downloadable Files</h3>
        <ul className="pl-5 list-disc">
          {downloads.map((file, index) => (
            <li key={index}>
              <a
                href={file.link}
                download
                className="text-indigo-500 hover:underline"
              >
                {file.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Useful Links Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-2xl font-semibold text-indigo-600">Useful Links</h3>
        <ul className="pl-5 list-disc">
          {usefulLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
