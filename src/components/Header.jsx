import { useEffect, useState } from 'react';
import './../styles/main.css';

function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src="https://pub-33737b2aa9d84562932483aa2479fcaa.r2.dev/logo.webp" alt="MIMOS Academy Logo" className="logo" />
    </header>
  );
}

export default Header;
