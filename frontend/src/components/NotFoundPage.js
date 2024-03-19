import React from 'react';
import {useCallback} from 'react';
import { useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);


  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;

