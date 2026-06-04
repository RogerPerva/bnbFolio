import { portfolio } from './content/portfolio.js';
import AirbnbMark from './components/AirbnbMark.jsx';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Properties from './components/Properties.jsx';
import ReviewsMarquee from './components/ReviewsMarquee.jsx';
import SectionIntro from './components/SectionIntro.jsx';
import Services from './components/Services.jsx';
import Trust from './components/Trust.jsx';

function App() {
  const { owner, contact, hero, stats, services, properties, process, reviews } = portfolio;

  return (
    <main>
      <Hero owner={owner} contact={contact} hero={hero} stats={stats} />
      <ReviewsMarquee reviews={reviews} />
      <SectionIntro
        eyebrow="Servicios"
        title="Servicios para lanzar o mejorar tu alojamiento"
        description="Ajustes practicos para que tu anuncio se vea mejor, responda dudas clave y ayude a que cada reserva sea mas ordenada."
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

export default App;
