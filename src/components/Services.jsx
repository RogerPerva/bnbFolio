import { CheckCircle2 } from 'lucide-react';

const serviceGradients = [
  'linear-gradient(90deg, #ff7a6f, #ffb07a)',
  'linear-gradient(90deg, #2f6672, #64c7b7)',
  'linear-gradient(90deg, #2d5d86, #79a7db)',
  'linear-gradient(90deg, #7a5f97, #ba98f2)',
  'linear-gradient(90deg, #d8925a, #f3cf9b)'
];

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

export default Services;
