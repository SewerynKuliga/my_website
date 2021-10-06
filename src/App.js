import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import ToTopButton from './ToTopButton/ToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      {/* Umiejętności */}
      {/* Kursy */}
      {/* Obecne stanowisko */}
      {/* Zainteresowania */}
      {/* Kontakt FB, Linkedin, Mail */}
      <Sidebar />
      <ToTopButton />
    </div>
  );
}

export default App;
