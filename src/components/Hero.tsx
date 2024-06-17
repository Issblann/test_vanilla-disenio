import ImgHero from '../assets/img-hero.png';
export const Hero = () => {
  return (
    <section className="hero">
      <img src={ImgHero} alt="ImgHero" />
      <div className="hero-titles">
        <p>TEXTO PREVIO AL TÍTULO</p>
        <h1>Título banner principal</h1>
        <button>Enviar</button>
      </div>
    </section>
  );
};
