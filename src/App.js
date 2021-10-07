import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import ToTopButton from './ToTopButton/ToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      {/* Umiejętności */}
      {/* Kursy */}
      {/* Zainteresowania */}
      {/* Kontakt FB, Linkedin, Mail */}
      <Sidebar />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default App;
