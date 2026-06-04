import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CircleDot,
  ExternalLink,
  LayoutGrid,
  X
} from 'lucide-react';

function Properties({ properties }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedProperty, setSelectedProperty] = React.useState(null);
  const triggerRef = React.useRef(null);
  const activeProperty = properties[activeIndex];

  const openProperty = (property, event) => {
    triggerRef.current = event.currentTarget;
    setSelectedProperty(property);
  };

  const closeProperty = () => {
    setSelectedProperty(null);
  };

  React.useEffect(() => {
    if (selectedProperty) return undefined;
    triggerRef.current?.focus();
    triggerRef.current = null;
    return undefined;
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
          <p className="eyebrow">Casos</p>
          <h2>Alojamientos que confiaron en mi</h2>
        </div>
        <p>Alojamientos listados abajo muestran su perfil, mejoras y el enlace al anuncio.</p>
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
            onClick={(event) => openProperty(activeProperty, event)}
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
            <button
              className="button dark move"
              type="button"
              onClick={(event) => openProperty(activeProperty, event)}
            >
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
        <PropertyModal property={selectedProperty} onClose={closeProperty} />
      )}
    </section>
  );
}

function PropertyModal({ property, onClose }) {
  const modalRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);
  const modalImage = property.gallery[0] || property.image;

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.classList.add('modal-open');
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="property-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
        ref={modalRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="icon-button modal-close"
          type="button"
          onClick={onClose}
          ref={closeButtonRef}
        >
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

export default Properties;
