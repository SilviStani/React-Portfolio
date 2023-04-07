import TopBar from '../topbar/TopBar';
import Menu from "../menu/menu";
import Intro from "../intro/intro";
import Works from "../works/works";
import AboutMe from "../Aboutme/AboutMe";
import Contact from "../contact/contact";
import TechSkills from "../TechSkills/TechSkill";
import "../../app.scss";
import { useState } from 'react';

function IntroComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     {/*<Footer />*/}
    <div className="sections">
      <Intro/>
      <Works/>
      <AboutMe/>
      <TechSkills/>
      <Contact/>
    </div>
   </div>
  )
}

export default IntroComp;