import IntroComp from './components/IntroComp/IntroComp';
import Portfolio from './components/portfolio/portfolio';
import "./app.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<IntroComp/>} />
        <Route path='/portfolio' element = {<Portfolio/>}/>
      </Routes> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;