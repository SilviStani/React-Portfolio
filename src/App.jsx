import TopBar from './components/topbar/TopBar';
import Menu from "./components/menu/menu";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import AboutMe from "./components/Aboutme/AboutMe";
//import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import "./app.scss";
import { useState } from 'react';
//import Footer from './components/Footer/Footer';

function App() {
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
       <Portfolio/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;