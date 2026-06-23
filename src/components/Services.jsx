import { useState } from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    name: 'Mariage complet',
    desc: 'De la préparation à la soirée. Reportage sur mesure capturant chaque émotion de votre plus beau jour. Livraison sous 4 semaines.',
    price: 'À partir de 150 000 DA',
    includes: ['Préparatifs', 'Cérémonie', 'Cocktail', 'Soirée', '400+ photos retouchées'],
  },
  {
    num: '02',
    name: 'Fiançailles & Portraits',
    desc: 'Une séance intime pour révéler votre complicité. En studio, en extérieur ou dans un lieu qui vous ressemble.',
    price: 'À partir de 45 000 DA',
    includes: ['2h de séance', 'Lieu au choix', '80+ photos retouchées', 'Galerie en ligne'],
  },
  {
    num: '03',
    name: 'Événements privés',
    desc: "Anniversaires, baptêmes, soirées d'entreprise. Chaque événement mérite d'être immortalisé avec soin.",
    price: 'À partir de 60 000 DA',
    includes: ['Durée flexible', 'Multi-ambiances', '200+ photos', 'Livraison rapide'],
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
