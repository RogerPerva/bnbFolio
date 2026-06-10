import React from 'react';
import { Pause, Play, Star } from 'lucide-react';

function ReviewsMarquee({ reviews }) {
  const [paused, setPaused] = React.useState(false);
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="reviews-strip" aria-labelledby="reviews-title">
      <div className="reviews-heading" data-reveal>
        <h2 id="reviews-title">Huéspedes que disfrutaron su estancia.</h2>
        <p>Comentarios que reflejan atención rápida, limpieza y una experiencia cómoda.</p>
      </div>

      <div
        className={`reviews-marquee${paused ? ' is-paused' : ''}`}
        aria-label="Reseñas de huéspedes"
      >
        <div className="reviews-track">
          {marqueeItems.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`}>
              <div className="review-content">
                <div className="review-meta">
                  <div className="review-identity">
                    <span className="review-avatar" aria-hidden="true">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.location}</p>
                    </div>
                  </div>
                  <div className="review-stars" aria-label="5 estrellas">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="review-stay">{review.stay}</p>
                <p className="review-text">{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        className="marquee-toggle"
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        title={paused ? 'Reanudar reseñas' : 'Pausar reseñas'}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        <span className="sr-only">{paused ? 'Reanudar reseñas' : 'Pausar reseñas'}</span>
      </button>
    </section>
  );
}

export default ReviewsMarquee;
