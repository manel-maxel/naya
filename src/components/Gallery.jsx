import { useState } from 'react';
import './Gallery.css';

const categories = ['Tous', 'Mariage', 'Fiançailles', 'Portraits', 'Événements'];

const photos = [
  { id: 1, category: 'Mariage', label: 'Mariage', size: 'large' },
  { id: 2, category: 'Portraits', label: 'Portraits', size: 'normal' },
  { id: 3, category: 'Fiançailles', label: 'Fiançailles', size: 'normal' },
  { id: 4, category: 'Mariage', label: 'Détails', size: 'normal' },
  { id: 5, category: 'Événements', label: 'Événements', size: 'normal' },
  { id: 6, category: 'Mariage', label: 'Cérémonie', size: 'wide' },
  { id: 7, category: 'Portraits', label: 'Couple', size: 'normal' },
];

const gradients = [
  'linear-gradient(135deg, #1a1a1a 0%, #261a1e 100%)',
  'linear-gradient(135deg, #1c1c1c 0%, #1e1d1b 100%)',
  'linear-gradient(135deg, #181818 0%, #201e1b 100%)',
  'linear-gradient(135deg, #1d1d1d 0%, #231a1c 100%)',
  'linear-gradient(135deg, #161616 0%, #1f1c18 100%)',
  'linear-gradient(135deg, #191919 0%, #241a1e 100%)',
  'linear-gradient(135deg, #1b1b1b 0%, #211a1d 100%)',
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered = photos.filter(
    (p) => activeFilter === 'Tous' || p.category === activeFilter
  );

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Chaque image<br />raconte une histoire
          </h2>
        </div>
        <p className="gallery-desc">
          Des moments fugaces transformés en souvenirs intemporels.
          Mariage, fiançailles, événements privés.
        </p>
      </div>

      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            className={`gallery-item ${photo.size}`}
          >
            <div
              className="gallery-fill"
              style={{ background: gradients[photo.id - 1] }}
            >
              <CameraIcon />
            </div>
            <div className="gallery-overlay">
              <span className="gallery-tag">{photo.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-more">
        <button className="btn-ghost">Voir l'intégralité du portfolio</button>
      </div>
    </section>
  );
}

function CameraIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.07 }}>
      <circle cx="24" cy="24" r="8" stroke="#E8A0B4" strokeWidth="1.5" />
      <rect x="6" y="14" width="36" height="26" rx="3" stroke="#E8A0B4" strokeWidth="1.5" />
      <path d="M16 14l3-6h10l3 6" stroke="#E8A0B4" strokeWidth="1.5" />
      <circle cx="38" cy="20" r="2" fill="var(--gold)" opacity="0.5" />
    </svg>
  );
}
