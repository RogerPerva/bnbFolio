import { UserCheck } from 'lucide-react';
import profileProcess from '../assets/reference-pictures/perfil2.optimized.jpg';

const stepTitles = ['Revisión inicial', 'Plan de acción', 'Orden operativo', 'Seguimiento'];

function Trust({ owner, process }) {
  return (
    <section className="trust">
      <div className="trust-media" aria-hidden="true">
        <img src={profileProcess} alt="" />
      </div>
      <div className="trust-inner">
        <div className="trust-copy" data-reveal>
          <p className="eyebrow">Confianza</p>
          <h2>Un proceso claro para lanzar o mejorar tu alojamiento.</h2>
          <p>
            Trabajo con pasos simples para definir qué se crea, qué se ajusta y cómo se mantiene la
            operación bajo control.
          </p>
        </div>
        <ol className="process-list" aria-label="Proceso de trabajo">
          {process.map((step, index) => (
            <li key={step} style={{ '--step-i': index, '--reveal-i': index }} data-reveal>
              <span className="process-num" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="process-body">
                <h3>{stepTitles[index] || `Paso ${index + 1}`}</h3>
                <p>{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="signature">
        <UserCheck aria-hidden="true" />
        <span>{owner.name}</span>
      </div>
    </section>
  );
}

export default Trust;
