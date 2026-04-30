import { useEffect, useState } from 'react';
import './../styles/main.css';

function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src="/images/logo.png" alt="MIMOS Academy Logo" className="logo" />
      <h1 className="header-title">MIMOS Academy</h1>
    </header>
  );
}

export default Header;
