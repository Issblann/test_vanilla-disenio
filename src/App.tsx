import { CardsSection } from './components/CardsSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TextHeader } from './components/Text-header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TextHeader />
      <Header />
      <main>
        <Hero />
        <CardsSection />
      </main>
    </>
  );
}

export default App;
