import React from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  LayoutGrid,
  X,
  ExternalLink,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { portfolio } from './content/portfolio.js';
import profileHero from './assets/reference-pictures/perfil1.png';
import profileProcess from './assets/reference-pictures/perfil2.jpg';

const iconMap = [ShieldCheck, UserCheck, Sparkles];
const serviceGradients = [
  'linear-gradient(90deg, #ff7a6f, #ffb07a)',
  'linear-gradient(90deg, #2f6672, #64c7b7)',
  'linear-gradient(90deg, #2d5d86, #79a7db)',
  'linear-gradient(90deg, #7a5f97, #ba98f2)',
  'linear-gradient(90deg, #d8925a, #f3cf9b)'
];
const heroAirbnbFloaters = [
  { top: '10%', left: '8%', size: 78, duration: '18s', rotation: '-10deg', opacity: 0.8 },
  { top: '18%', left: '48%', size: 84, duration: '22s', rotation: '8deg', opacity: 0.8 },
  { top: '52%', left: '14%', size: 74, duration: '19s', rotation: '-4deg', opacity: 0.8 },
  { bottom: '16%', right: '24%', size: 80, duration: '21s', rotation: '14deg', opacity: 0.8 }
];

function App() {
  const { owner, contact, hero, stats, services, properties, process } = portfolio;

  return (
    <main>
      <Hero owner={owner} contact={contact} hero={hero} stats={stats} />
      <SectionIntro
        eyebrow="Servicios"
        title="Servicios para lanzar o mejorar tu alojamiento"
        description="Creación de anuncio, fotografía, orientación y operación para propietarios que empiezan desde cero o ya tienen un Airbnb activo."
      />
      <Services services={services} />
      <Properties properties={properties} />
      <Trust owner={owner} process={process} />
      <Contact owner={owner} contact={contact} />
      <a
        className="airbnb-fab"
        href={contact.airbnb}
        aria-label="Ver perfil de Airbnb"
        title="Ver perfil de Airbnb"
      >
        <AirbnbMark />
        <span className="sr-only">Ver perfil de Airbnb</span>
      </a>
    </main>
  );
}

function Hero({ owner, contact, hero, stats }) {
  return (
    <section className="hero">
      <div className="hero-floaters" aria-hidden="true">
        {heroAirbnbFloaters.map((floater, index) => (
          <span
            className="hero-floater"
            key={`${index}-${floater.top || floater.bottom}`}
            style={{
              top: floater.top,
              right: floater.right,
              bottom: floater.bottom,
              left: floater.left,
              width: `${floater.size}px`,
              height: `${floater.size}px`,
              opacity: floater.opacity,
              '--float-duration': floater.duration,
              '--float-rotation': floater.rotation
            }}
          >
            <AirbnbMark />
          </span>
        ))}
      </div>

      <nav className="nav" aria-label="Navegacion principal">
        <a className="brand" href="#top" aria-label="Inicio">
          RP
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#alojamientos">Alojamientos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div className="hero-grid" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="button primary move" href={contact.whatsapp}>
              <MessageCircle aria-hidden="true" />
              {contact.primaryCta}
            </a>
            <a className="button secondary hero-alojamientos move" href="#alojamientos">
              <Building2 aria-hidden="true" />
              Alojamientos que confiaron
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <aside className="profile-panel" aria-label="Perfil profesional">
            <div className="profile-photo">
              <img src={owner.profileImage || profileHero} alt={`Foto de ${owner.name}`} />
            </div>
            <div>
              <p className="profile-name">{owner.name}</p>
              <p className="profile-role">{owner.role}</p>
              <p className="profile-location">
                <MapPin aria-hidden="true" />
                {owner.location}
              </p>
            </div>
            <p className="profile-intro">{owner.intro}</p>
            <div className="proof-list">
              {owner.proofPoints.map((point, index) => {
                const Icon = iconMap[index] || CheckCircle2;
                return (
                  <span key={point}>
                    <Icon aria-hidden="true" />
                    {point}
                  </span>
                );
              })}
            </div>
          </aside>

        </div>
      </div>

      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AirbnbMark() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M11.998 18.267c-1.352-1.696-2.147-3.182-2.412-4.455-.263-1.026-.159-1.847.291-2.464.477-.71 1.187-1.055 2.12-1.055s1.642.345 2.119 1.062c.446.61.558 1.432.286 2.464-.291 1.298-1.085 2.784-2.411 4.456zm9.597 1.14c-.185 1.245-1.034 2.278-2.2 2.782-2.251.98-4.48-.583-6.388-2.703 3.155-3.95 3.738-7.025 2.384-9.014-.795-1.14-1.933-1.695-3.393-1.695-2.943 0-4.561 2.49-3.925 5.38.37 1.564 1.351 3.342 2.915 5.33-.98 1.084-1.909 1.855-2.73 2.332-.636.344-1.245.557-1.828.608-2.677.399-4.776-2.198-3.823-4.877.132-.345.395-.98.845-1.961l.025-.053C4.94 12.36 6.717 8.75 8.759 4.746l.053-.132.58-1.115c.45-.822.635-1.19 1.351-1.643.345-.209.769-.314 1.245-.314.954 0 1.697.557 2.015 1.006.158.239.345.557.582.953l.558 1.088.08.159c2.04 4.002 3.819 7.605 5.276 10.789l.026.025.533 1.22.318.764c.243.612.294 1.221.213 1.857zm1.219-2.389c-.186-.583-.504-1.271-.9-2.093v-.03c-1.887-4.005-3.64-7.605-5.304-10.84l-.111-.162C15.313 1.461 14.464 0 11.998 0 9.56 0 8.524 1.694 7.465 3.897l-.081.16c-1.668 3.234-3.42 6.839-5.301 10.842v.053l-.558 1.219c-.21.504-.317.768-.345.847-1.35 3.712 1.432 6.972 4.8 6.972.027 0 .132 0 .264-.027h.372c1.75-.213 3.553-1.325 5.382-3.316 1.828 1.988 3.633 3.103 5.38 3.316h.372c.132.027.238.027.264.027 3.368.003 6.15-3.26 4.8-6.972z" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <section className="section-intro" id="servicios">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

function Services({ services }) {
  return (
    <section className="services-grid" aria-label="Servicios">
      {services.map((service, index) => (
        <article
          className="service-card"
          key={service.title}
          style={{ '--service-gradient': serviceGradients[index % serviceGradients.length] }}
        >
          <span aria-hidden="true" />
          <div className="service-card-content">
            <CheckCircle2 aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function Properties({ properties }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedProperty, setSelectedProperty] = React.useState(null);
  const activeProperty = properties[activeIndex];

  React.useEffect(() => {
    if (!selectedProperty) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProperty(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProperty]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? properties.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === properties.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="properties" id="alojamientos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Casos reales</p>
          <h2>Alojamientos que confiaron en mí</h2>
        </div>
        <p>
          Cada alojamiento puede mostrar fotos reales, mejoras y el enlace al anuncio cuando ya está listo.
        </p>
      </div>

      <div className="portfolio-carousel">
        <button className="icon-button carousel-arrow left" type="button" onClick={showPrevious}>
          <ChevronLeft aria-hidden="true" />
          <span className="sr-only">Alojamiento anterior</span>
        </button>

        <article className="featured-property">
          <button
            className="featured-image"
            type="button"
            onClick={() => setSelectedProperty(activeProperty)}
          >
            <img src={activeProperty.image} alt={`Foto de ${activeProperty.name}`} />
          </button>

          <div className="featured-copy">
            <h3>{activeProperty.name}</h3>
            <p>{activeProperty.description}</p>
            <div className="highlight-row">
              {activeProperty.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
            <button className="button dark move" type="button" onClick={() => setSelectedProperty(activeProperty)}>
              <LayoutGrid aria-hidden="true" />
              Ver alojamiento
            </button>
          </div>
        </article>

        <button className="icon-button carousel-arrow right" type="button" onClick={showNext}>
          <ChevronRight aria-hidden="true" />
          <span className="sr-only">Siguiente alojamiento</span>
        </button>
      </div>

      <div className="carousel-dots" aria-label="Seleccionar alojamiento">
        {properties.map((property, index) => (
          <button
            className={index === activeIndex ? 'active' : ''}
            key={property.name}
            type="button"
            onClick={() => setActiveIndex(index)}
          >
            <CircleDot aria-hidden="true" />
            <span>{property.name}</span>
          </button>
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </section>
  );
}

function PropertyModal({ property, onClose }) {
  const modalImage = property.gallery[0] || property.image;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="property-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button modal-close" type="button" onClick={onClose}>
          <X aria-hidden="true" />
          <span className="sr-only">Cerrar</span>
        </button>

        <div className="modal-gallery">
          <img src={modalImage} alt={`Foto principal de ${property.name}`} />
        </div>

        <div className="modal-content">
          <h2 id="property-modal-title">{property.name}</h2>
          <p>{property.description}</p>

          <div className="modal-section">
            <h3>Proceso realizado</h3>
            <ul>
              {property.workDone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="result-panel">
            <strong>Resultado</strong>
            <p>{property.result}</p>
          </div>

          {property.link && (
            <a className="text-link" href={property.link} target="_blank" rel="noreferrer">
              Ver alojamiento en Airbnb
              <ExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

function Trust({ owner, process }) {
  return (
    <section className="trust">
      <div className="trust-copy">
        <p className="eyebrow">Confianza</p>
        <h2>Un proceso claro para lanzar o mejorar tu alojamiento</h2>
        <p>
          Trabajo con pasos simples para definir qué se crea, qué se ajusta y cómo se mantiene la
          operación bajo control.
        </p>
      </div>
      <div className="process-list" aria-label="Proceso de trabajo">
        {process.map((step, index) => (
          <div key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div className="signature">
        <UserCheck aria-hidden="true" />
        <span>{owner.name}</span>
      </div>
    </section>
  );
}

function Contact({ owner, contact }) {
  return (
    <section className="contact" id="contacto">
      <div className="contact-copy">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu idea o tu alojamiento</h2>
          <p>
            Si vas a crear tu anuncio desde cero o ya tienes uno activo, te ayudo a ordenar el siguiente
            paso.
          </p>
        </div>
        <div className="contact-actions">
          <a className="social-circle social-whatsapp move contact-whatsapp" href={contact.whatsapp} aria-label="WhatsApp">
            <MessageCircle aria-hidden="true" className="social-icon" strokeWidth={2.2} />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a className="social-circle social-airbnb move" href={contact.airbnb} aria-label="Airbnb">
            <AirbnbMark />
            <span className="sr-only">Airbnb</span>
          </a>
        </div>
      </div>
      <figure className="contact-photo">
        <img src={profileProcess} alt={`${owner.name} trabajando en la gestión diaria`} />
      </figure>
      <div className="footer-copy">
        <p className="footer-kicker">Creación de anuncios, fotografía y gestión Airbnb.</p>
        <p className="footer-note">© {new Date().getFullYear()} {owner.name}. Diseñado para anfitriones que empiezan o ya operan.</p>
      </div>
    </section>
  );
}

export default App;
