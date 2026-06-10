import React from 'react';
import { portfolio } from './content/portfolio.js';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Properties from './components/Properties.jsx';
import ReviewsMarquee from './components/ReviewsMarquee.jsx';
import SectionIntro from './components/SectionIntro.jsx';
import Services from './components/Services.jsx';
import Trust from './components/Trust.jsx';

function App() {
  const { owner, contact, hero, stats, services, properties, process, reviews } = portfolio;

  React.useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('revealed'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero owner={owner} contact={contact} hero={hero} stats={stats} />
      <ReviewsMarquee reviews={reviews} />
      <SectionIntro
        title="Servicios para lanzar o mejorar tu alojamiento."
        description="Ajustes prácticos para que tu anuncio se vea mejor, responda dudas clave y ayude a que cada reserva sea más ordenada."
      />
      <Services services={services} />
      <Properties properties={properties} />
      <Trust owner={owner} process={process} />
      <Contact owner={owner} contact={contact} />
    </main>
  );
}

export default App;
