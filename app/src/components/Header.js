import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div 
      className="fixed-top w-100 d-flex justify-content-between align-items-center p-2 bg-light border-bottom border-secondary"
      >
      <h1 className="h2">Charity Finder</h1>
      <nav>
        <Link className="m-3" to="/search">Search</Link>
        <Link className="m-3" to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default Header;