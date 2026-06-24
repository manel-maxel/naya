import { useState } from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    name: 'Pack Principal',
    desc: 'Couverture vidéo complète avec montage professionnel + photos illimitées. Flash disque inclus.',
    price: 'À partir de 50 000 DA',
    includes: [
      'Couverture vidéo avec montage',
      'Photos illimitées',
      'Flash disque inclus',
    ],
  },
  {
    num: '02',
    name: 'Options supplémentaires',
    desc: "Des options à ajouter à votre pack pour personnaliser votre couverture selon vos besoins.",
    price: 'À partir de 3 000 DA',
    includes: [
      'Cortège : +10 000 DA',
      'Book 80 photos : +6 000 DA',
      'Album 120 photos : +5 000 DA',
      'Cadre : +3 000 DA',
      'Coffre : +6 500 DA',
      'Drone : +15 000 DA',
    ],
  },
  {
    num: '03',
    name: 'Prestations soirée & équipe',
    desc: "Prolongez votre couverture ou renforcez l'équipe pour capturer chaque instant de votre événement.",
    price: 'À partir de 3 000 DA / pers',
    includes: [
      'Après-midi / Soirée / Dîner : +12 000 DA',
      'Équipe sans photos : +3 000 DA / pers',
    ],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="section-label">Prestations</div>
        <h2 className="section-title">Ce que je propose</h2>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`service-card ${hovered === i ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="service-num">{s.num}</div>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
            <ul className="service-includes">
              {s.includes.map((item) => (
                <li key={item}>
                  <span className="check">—</span> {item}
                </li>
              ))}
            </ul>
            <div className="service-footer">
              <span className="service-price">{s.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
