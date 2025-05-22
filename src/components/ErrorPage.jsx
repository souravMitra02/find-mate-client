import React from 'react';
import { Link } from 'react-router';
import errorImg from '../assets/error.png';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <img src={errorImg} alt="Error" className="max-w-md w-full mb-8" />
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-500 mb-6">The page you are looking for might have been removed or is temporarily unavailable.</p>
      
      <Link to="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
