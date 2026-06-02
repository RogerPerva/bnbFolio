import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  LayoutGrid,
  Maximize2,
  X,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { portfolio } from './content/portfolio.js';
import profileHero from './reference-pictures/perfil1.png';
import profileProcess from './reference-pictures/perfil2.jpg';
import welcomeHost from './assets/welcome-host.png';

const iconMap = [ShieldCheck, UserCheck, Sparkles];

function App() {
  const { owner, contact, hero, stats, services, properties, process } = portfolio;

  return (
    <main>
      <Hero owner={owner} contact={contact} hero={hero} stats={stats} />
      <SectionIntro
        eyebrow="Servicios"
        title="Gestión clara para propietarios que quieren delegar con confianza"
        description="Servicios concretos para ordenar la operación, mejorar la presentación del anuncio y cuidar la experiencia del huésped."
      />
      <Services services={services} />
      <Properties properties={properties} />
      <Trust owner={owner} process={process} />
      <Contact owner={owner} contact={contact} />
    </main>
  );
}

function Hero({ owner, contact, hero, stats }) {
  return (
    <section className="hero">
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
            <a className="button primary" href={contact.whatsapp}>
              <MessageCircle aria-hidden="true" />
              {contact.primaryCta}
            </a>
            <a className="button secondary" href="#alojamientos">
              <Building2 aria-hidden="true" />
              Ver alojamientos gestionados
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

          <div className="welcome-hover" aria-label="Imagen de bienvenida al alojamiento">
            <img src={welcomeHost} alt="Anfitrión saludando fuera de una casa moderna" />
            <span>Vista de bienvenida</span>
          </div>
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
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <CheckCircle2 aria-hidden="true" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
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
          <p className="eyebrow">Alojamientos</p>
          <h2>Alojamientos y casos de trabajo preparados para escalar</h2>
        </div>
        <p>
          Cada alojamiento puede mostrar fotos, beneficios operativos, mejoras realizadas y links reales
          cuando tengas todo documentado.
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
            <span>
              <Maximize2 aria-hidden="true" />
              Ver caso
            </span>
          </button>

          <div className="featured-copy">
            <p className="property-location">{activeProperty.location}</p>
            <h3>{activeProperty.name}</h3>
            <p>{activeProperty.description}</p>
            <div className="highlight-row">
              {activeProperty.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
            <button className="button dark" type="button" onClick={() => setSelectedProperty(activeProperty)}>
              <LayoutGrid aria-hidden="true" />
              Explorar trabajo
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
          {property.gallery.map((image, index) => (
            <img
              className={index === 0 ? 'large' : ''}
              src={image}
              alt={`${property.name} imagen ${index + 1}`}
              key={image}
            />
          ))}
        </div>

        <div className="modal-content">
          <p className="property-location">{property.location}</p>
          <h2 id="property-modal-title">{property.name}</h2>
          <p>{property.description}</p>

          <div className="modal-section">
            <h3>Trabajo realizado</h3>
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

          <a className="text-link" href={property.link}>
            Ver link del alojamiento
            <ExternalLink aria-hidden="true" />
          </a>
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
        <h2>Un proceso claro para que sepas qué estoy haciendo con tu alojamiento</h2>
        <p>
          Trabajo con pasos simples para que sepas qué se revisa, qué se mejora y cómo se mantiene la
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
      <figure className="process-photo">
        <img src={profileProcess} alt={`${owner.name} trabajando en la gestión diaria`} />
      </figure>
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
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>Hablemos de tu alojamiento</h2>
        <p>
          Si tienes una propiedad en Airbnb o quieres mejorar su operación, puedo ayudarte a identificar
          qué conviene delegar primero.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={contact.whatsapp}>
          <MessageCircle aria-hidden="true" />
          WhatsApp
        </a>
        <a className="button secondary" href={contact.email}>
          <Mail aria-hidden="true" />
          Email
        </a>
        <a className="button secondary" href={contact.instagram}>
          <ArrowRight aria-hidden="true" />
          Instagram
        </a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} {owner.name}. Portafolio profesional Airbnb.</p>
    </section>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default App;
