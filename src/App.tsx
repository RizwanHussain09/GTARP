import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Application from './components/Application';
import Departments from './components/Departments';
import Streams from './components/Streams';
import Gallery from './components/Gallery';
import Staff from './components/Staff';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Rules />
      <Application />
      <Departments />
      <Streams />
      <Gallery />
      <Staff />
      <News />
      <Footer />
    </div>
  );
}

export default App;
