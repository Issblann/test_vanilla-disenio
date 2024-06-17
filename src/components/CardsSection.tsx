import Elipse1 from '../assets/Ellipse-1.png';
import Elipse2 from '../assets/Ellipse-2.png';
import CoheteIcon from '../assets/cohete_icon.svg';
type Card = {
  icon: string;
  title: string;
  description: string;
};
export const CardsSection = () => {
  const cards: Card[] = [
    {
      icon: CoheteIcon,
      title: 'Item 1',
      description:
        'Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).Mientras puedes navegar en nuestro sitio antiguo.',
    },
    {
      icon: CoheteIcon,
      title: 'Item 2',
      description:
        'Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).Mientras puedes navegar en nuestro sitio antiguo.',
    },
    {
      icon: CoheteIcon,
      title: 'Item 3',
      description:
        'Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).Mientras puedes navegar en nuestro sitio antiguo.',
    },
  ];
  return (
    <section className="cards-section">
      {cards.map((card, i) => (
        <div className="card" key={i}>
          <img src={card.icon} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}

      <img className="Elipse1" src={Elipse1} alt="Elipse1" />
      <img className="Elipse2" src={Elipse2} alt="Elipse2" />
    </section>
  );
};
