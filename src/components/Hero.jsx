import {
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react';
import profileHero from '../assets/reference-pictures/perfil1.optimized.webp';

const iconMap = [ShieldCheck, UserCheck, Sparkles];

function EmphasizedTitle({ text }) {
  const words = text.trim().split(' ');
  const lastWord = words.pop();
  return (
    <>
      {words.join(' ')} <em>{lastWord}.</em>
    </>
  );
}

function Hero({ owner, contact, hero, stats }) {
  return (
    <section className="hero">
      <nav className="nav" aria-label="Navegación principal">
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
          <h1>
            <EmphasizedTitle text={hero.title} />
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={contact.whatsapp}>
              <MessageCircle aria-hidden="true" />
              {contact.primaryCta}
            </a>
            <a className="button secondary" href="#alojamientos">
              <Building2 aria-hidden="true" />
              Alojamientos que confiaron
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <aside className="profile-panel" aria-label="Perfil profesional">
            <div className="profile-photo">
              <img
                src={owner.profileImage || profileHero}
                alt={`Foto de ${owner.name}`}
                fetchPriority="high"
                decoding="async"
              />
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
