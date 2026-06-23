import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero-cell cell-${i + 1}`} />
        ))}
      </div>

      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-content">
        <p className="hero-eyebrow">Photographe · Mariages & Événements</p>
        <h1 className="hero-title">
          Capturer<br />
          <em>l'instant</em><br />
          vrai
        </h1>
        <p className="hero-sub">Alger </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Réserver une date
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('gallery')}>
            Voir le portfolio
          </button>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Défiler</span>
      </div>
    </section>
  );
}
