'use client';

import React from 'react';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Personalized Recipe Finder</title>
        <meta name="description" content="Find recipes based on the ingredients you have at home." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
