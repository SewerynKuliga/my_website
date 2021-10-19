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
import styled from 'styled-components';
import Projects from './MyProjects/Projects';
import Background from "./Images/Background.jpg"


function Main() {
  return (
    <Body>
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Courses />
      <MyInterests />
      <Contact />
      <Game />
      <Navigation />
      <Sidebar />
      <ToTopButton />
      <Footer />
    </Body>
  );
}

export default Main;

const Body = styled.div`
  width: auto;
  height: auto;
  min-width: 320px;
  max-width: 2000px;
  background-image: url(${Background});
`