import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-6">
      <div className="container mx-auto">
        <p className="text-gray-600 mb-2">
          TuniTicket - Your trusted platform for buying and selling tickets to the best events in Tunisia.
        </p>
        <p className="text-gray-600">
          © {new Date().getFullYear()} TuniTicket. All rights reserved. Made in MedTech.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
