import React from 'react';
import { MessageCircle, Share2 } from 'lucide-react';
import profileProcess from '../assets/reference-pictures/perfil2.optimized.jpg';
import AirbnbMark from './AirbnbMark.jsx';

const SHARE_URL = 'https://rogerperva.github.io/bnbFolio/';

function Contact({ owner, contact }) {
  return (
    <section className="contact" id="contacto">
      <div className="contact-copy">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu alojamiento y del siguiente paso</h2>
          <p>
            Si quieres lanzar, ordenar u optimizar tu anuncio, puedo ayudarte a revisar que conviene
            ajustar primero.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="social-circle social-whatsapp move contact-whatsapp"
            href={contact.whatsapp}
            aria-label="WhatsApp"
          >
            <MessageCircle aria-hidden="true" className="social-icon" strokeWidth={2.2} />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a className="social-circle social-airbnb move" href={contact.airbnb} aria-label="Airbnb">
            <AirbnbMark />
            <span className="sr-only">Airbnb</span>
          </a>
          <ShareButton />
        </div>
      </div>
      <figure className="contact-photo">
        <img src={profileProcess} alt={`${owner.name} trabajando en la gestion diaria`} />
      </figure>
      <div className="footer-copy">
        <p className="footer-kicker">Creacion de anuncios, fotografia y gestion Airbnb.</p>
        <p className="footer-note">
          © {new Date().getFullYear()} {owner.name}. Disenado para anfitriones que empiezan o ya
          operan.
        </p>
      </div>
    </section>
  );
}

function ShareButton() {
  const [label, setLabel] = React.useState('Compartir');

  const handleShare = async () => {
    const shareData = {
      title: 'Rogelio Pervaz | Gestion Airbnb',
      url: SHARE_URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(SHARE_URL);
      setLabel('Copiado');
      window.setTimeout(() => setLabel('Compartir'), 1800);
    } catch {
      setLabel('No copiado');
      window.setTimeout(() => setLabel('Compartir'), 1800);
    }
  };

  return (
    <button
      className="social-circle social-share move"
      type="button"
      onClick={handleShare}
      aria-label={label === 'Compartir' ? 'Compartir pagina' : label}
      title={label}
    >
      <Share2 aria-hidden="true" className="social-icon" strokeWidth={2.2} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Contact;
