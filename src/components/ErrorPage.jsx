import React from 'react';
import { Link } from 'react-router';
import errorImg from '../assets/error.png';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-center px-4">
      <img src={errorImg} alt="Error" className="max-w-md w-full mb-6 drop-shadow-md" />
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      
      <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-xl">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      
      <Link to="/">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg">
          ⬅ Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
