import React from 'react';
import './trivia.scss';
import {triviaPoints} from './trivia.js';
import { useState } from 'react';
import Preguntas from './Preguntas';

const Trivia = () => {
const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className='appTrivia'>
    <div className="main">
     <div className="top">
    <a href="/" className="logo"><img src="/assets/inicio.png" alt="" height={80} width={80} /></a>
        <div className="timer">30</div>
     </div>
     <div className="bottom">
        <Preguntas />
     </div>
    </div>    
    <div className="pyramid">
        <ul className='pointsList'>
            {
                triviaPoints.map( (p) => (
                  <li className = {questionNumber === p.id ? 'pointsListItem active' : 'pointsListItem'} >
                    <span className='pointListNumber'>{p.id}</span>
                    <span className='pointListAmmount'> {p.amount}</span>
                  </li>
                ))
            }
        </ul>
    </div>    
    </div>
  )
}

export default Trivia;