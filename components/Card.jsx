import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg p-6 shadow-md ${className}`}>
    {children}
  </div>
);
