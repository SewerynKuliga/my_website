import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import ToTopButton from './ToTopButton/ToTopButton';
import Courses from './Courses/Courses'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      {/* Umiejętności */}
      <Courses />
      {/* Zainteresowania */}
      {/* Kontakt FB, Linkedin, Mail */}
      {/* Gra */}
      {/* Navigacja */}
      <Sidebar />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default App;
