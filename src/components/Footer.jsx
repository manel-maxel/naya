import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">N<span>·</span>AYA</div>
        <p className="footer-tagline">Photographe · Mariages & Événements</p>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Naya Photography · Tous droits réservés</p>
        <div className="footer-social">
          <a href="https://www.instagram.com/nayaprod19?igsh=ejBzcjY1NTRjb3Zy" className="social-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
