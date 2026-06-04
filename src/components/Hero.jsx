import {
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react';
import profileHero from '../assets/reference-pictures/perfil1.optimized.jpg';
import AirbnbMark from './AirbnbMark.jsx';

const iconMap = [ShieldCheck, UserCheck, Sparkles];
const heroAirbnbFloaters = [
  { top: '10%', left: '8%', size: 78, duration: '18s', rotation: '-10deg', opacity: 0.8 },
  { top: '18%', left: '48%', size: 84, duration: '22s', rotation: '8deg', opacity: 0.8 },
  { top: '52%', left: '14%', size: 74, duration: '19s', rotation: '-4deg', opacity: 0.8 },
  { bottom: '16%', right: '24%', size: 80, duration: '21s', rotation: '14deg', opacity: 0.8 }
];

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

export default Hero;
