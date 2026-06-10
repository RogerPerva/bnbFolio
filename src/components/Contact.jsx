import React from 'react';
import { MessageCircle, Share2 } from 'lucide-react';
import AirbnbMark from './AirbnbMark.jsx';

const SHARE_URL = 'https://rogerperva.github.io/bnbFolio/';

function Contact({ owner, contact }) {
  return (
    <section className="contact" id="contacto">
      <div className="contact-copy" data-reveal>
        <h2>
          Hablemos de tu <em>alojamiento</em> y del{' '}
          <span className="next-step">siguiente paso</span>.
        </h2>
        <p>
          Si quieres lanzar, ordenar u optimizar tu anuncio, puedo ayudarte a revisar qué conviene
          ajustar primero.
        </p>
        <div className="contact-actions">
          <a className="button primary" href={contact.whatsapp}>
            <MessageCircle aria-hidden="true" />
            {contact.primaryCta}
          </a>
          <a className="social-circle social-airbnb" href={contact.airbnb} aria-label="Ver perfil de Airbnb">
            <AirbnbMark />
            <span className="sr-only">Ver perfil de Airbnb</span>
          </a>
          <ShareButton />
        </div>
      </div>
      <div className="footer-copy">
        <p className="footer-kicker">Creación de anuncios, fotografía y gestión Airbnb.</p>
        <p className="footer-note">
          © {new Date().getFullYear()} {owner.name}. Diseñado para anfitriones que empiezan o ya
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
      className="social-circle social-share"
      type="button"
      onClick={handleShare}
      aria-label={label === 'Compartir' ? 'Compartir página' : label}
      title={label}
    >
      <Share2 aria-hidden="true" className="social-icon" strokeWidth={2.2} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Contact;
