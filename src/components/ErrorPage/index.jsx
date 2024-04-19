import React from 'react';
import ErrorImg from '../../assets/error.png'
import './index.css'; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src={ErrorImg} className="error-icon" />
        <h2 className="error-heading">Oops! Something went wrong</h2>
        <p className="error-message">We're sorry, there was an error while processing your request.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
