import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import ToTopButton from './ToTopButton/ToTopButton';
import Courses from './Courses/Courses'
import Skills from './Skills/Skills';
import Navigation from './Navigation/Navigation';
import Contact from './Contact/Contact';
import MyInterests from './MyInterests/MyInterests';
import Game from './Game/Game';


function Main() {
  return (
    <div>
          <Header />
          <AboutMe />
          <Experience />
          {/* <Skills /> */}
          <Courses />
          <MyInterests />
          {/* <Contact /> */}
          {/* <Game /> */}
          <Navigation />
          <Sidebar />
          <ToTopButton />
          <Footer />
    </div>
  );
}

export default Main;
