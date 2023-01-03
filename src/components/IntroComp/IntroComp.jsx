import TopBar from '../topbar/TopBar';
import Menu from "../menu/menu";
import Intro from "../intro/intro";
import Portfolio from "../portfolio/portfolio";
import Works from "../works/works";
import AboutMe from "../Aboutme/AboutMe";
import Contact from "../contact/contact";
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
      <Contact/>
    </div>
   </div>
  )
}

export default IntroComp;