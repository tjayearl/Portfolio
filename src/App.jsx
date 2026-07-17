import Nav from './components/Nav';
import Hero from './components/Hero';
import Codex from './components/Codex';
import Works from './components/Works';
import Arsenal from './components/Arsenal';
import CV from './components/CV';
import Correspondence from './components/Correspondence';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scriptorium-ground min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Codex />
        <Works />
        <Arsenal />
        <CV />
        <Correspondence />
      </main>
      <Footer />
    </div>
  );
}
