import IntroComp from './components/IntroComp/IntroComp';
import Trivia from './components/Trivia/Trivia.jsx';
import "./app.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<IntroComp/>} />
        <Route path='/trivia' element = {<Trivia/>}/>
      </Routes> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;