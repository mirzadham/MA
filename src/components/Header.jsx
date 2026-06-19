import { useEffect, useState } from 'react';
import './../styles/main.css';

function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src="https://cdn.mimos-academy.com/logo.webp" alt="MIMOS Academy Logo" className="logo" />
    </header>
  );
}

export default Header;
