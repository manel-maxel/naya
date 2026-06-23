import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const SERVICE_ID = 'service_4qrwgkx';
const TEMPLATE_ID = 'template_ifdrwza';
const PUBLIC_KEY = '1_OcLkcTbNFY7_ReL';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: form.name,
      email: form.email,
      type: form.type,
      date: form.date,
      message: form.message,
      time: new Date().toLocaleString('fr-FR'),
    }, PUBLIC_KEY)
    .then(() => {
      setSubmitted(true);
      setLoading(false);
    })
    .catch(() => {
      setError("Une erreur s'est produite. Veuillez réessayer.");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
        <h2 className="contact-title">
          Votre date<br />est <em>unique</em>
        </h2>
        <p className="contact-sub">
          Chaque projet commence par une conversation. Parlez-moi de votre
          histoire, je vous dirai comment je peux la raconter.
        </p>

        {submitted ? (
          <div className="contact-success">
            <div className="success-icon">✓</div>
            <h3>Message envoyé !</h3>
            <p>Je vous répondrai dans les 24 à 48h. Merci pour votre confiance.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Prénom & Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre prénom et nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre adresse email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">Type d'événement</label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selectionnez le type d'événement</option>
                  <option value="Mariage">Mariage</option>
                  <option value="Fiançailles">Fiançailles</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Événement privé">Événement privé</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date envisagée</label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="Année-Mois-Jour"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Votre message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Parlez-moi de votre projet..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p style={{ color: '#E8A0B4', fontSize: '13px', textAlign: 'center' }}>{error}</p>}

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </form>
        )}

        <div className="contact-info">
          <a href="tel:+213697930478" className="contact-link">+213697930478</a>
          <span className="contact-sep">·</span>
          <a href="mailto:nayaprod19@gmail.com" className="contact-link">nayaprod19@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
