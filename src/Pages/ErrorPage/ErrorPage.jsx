import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Page not found <b className="text-red-500">404</b>
        </h2>
        <h5 className="mt-4 text-lg text-gray-600">
          We can't seem to find the page you are looking for.
        </h5>
        
          <Link to='/' 
            className="mt-6 inline-block px-6 py-3 text-white bg-custom-pink rounded  transition">
            Visit home page now
          </Link>
         
        
      </div>
    </div>
  );
};

export default ErrorPage;
