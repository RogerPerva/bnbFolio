import { UserCheck } from 'lucide-react';

function Trust({ owner, process }) {
  return (
    <section className="trust">
      <div className="trust-copy">
        <p className="eyebrow">Confianza</p>
        <h2>Un proceso claro para lanzar o mejorar tu alojamiento</h2>
        <p>
          Trabajo con pasos simples para definir que se crea, que se ajusta y como se mantiene la
          operacion bajo control.
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

export default Trust;
