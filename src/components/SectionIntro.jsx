function SectionIntro({ eyebrow, title, description }) {
  return (
    <section className="section-intro" id="servicios">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default SectionIntro;
