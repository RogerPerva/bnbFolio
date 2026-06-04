import { Star } from 'lucide-react';

function ReviewsMarquee({ reviews }) {
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="reviews-strip" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <p className="eyebrow">Resenas</p>
        <h2 id="reviews-title">Huespedes que disfrutaron su estancia</h2>
        <p>Comentarios que reflejan atencion rapida, limpieza y una experiencia comoda.</p>
      </div>

      <div className="reviews-marquee" aria-label="Resenas de huespedes">
        <div className="reviews-track">
          {marqueeItems.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`}>
              <div className="review-content">
                <div className="review-meta">
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.location}</p>
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
    </section>
  );
}

export default ReviewsMarquee;
