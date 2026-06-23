import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">NAYA<span>·</span>Prod</div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><button onClick={() => scrollTo('gallery')}>Portfolio</button></li>
        <li><button onClick={() => scrollTo('services')}>Prestations</button></li>
        <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
      </ul>

      <button className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
