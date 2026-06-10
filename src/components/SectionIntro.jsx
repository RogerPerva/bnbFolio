function SectionIntro({ title, description }) {
  return (
    <section className="section-intro" id="servicios" data-reveal>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default SectionIntro;
