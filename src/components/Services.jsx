import { Camera, CalendarCheck, MessageSquareText, PenLine, TrendingUp } from 'lucide-react';

const serviceIcons = [PenLine, CalendarCheck, Camera, MessageSquareText, TrendingUp];

function Services({ services }) {
  return (
    <section className="services-grid" aria-label="Servicios">
      {services.map((service, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];
        return (
          <article
            className="service-card"
            key={service.title}
            data-reveal
            style={{ '--reveal-i': index % 3 }}
          >
            <div className="service-card-content">
              <span className="service-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Services;
