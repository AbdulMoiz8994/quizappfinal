import React, { useEffect,useState } from 'react';
import './App.css';

import {Services} from './Services/index'
import{Quiz} from './Types/Types'
import {QuestionCards} from './Components/index'

function App() {
let [state, setState]=useState<Quiz[]>([])
let[currentValue,setCurrentValue]=useState(0)
let[QuestionNumber,setQuestionNumber]=useState(1)
let[score,setScore]=useState(0)
useEffect(() =>{
  const getQuiz=async() =>{
    const question:Quiz[]= await Services(10,'easy');
    // console.log(question);
    setState(question)
  }
  getQuiz()
},[])


const CallFunction=(e:React.FormEvent<EventTarget>,UserAns: string) =>{
  e.preventDefault();
  const getUserAns:Quiz=state[currentValue]
  // console.log("correct Ans " + getUserAns.answer , " USer Selection " + UserAns);
  // console.log(UserAns);
  
  
  if(UserAns === getUserAns.answer){
        setScore(++score)
  }

if(currentValue !== state.length -1){
  setCurrentValue(++currentValue)   
  setQuestionNumber(++QuestionNumber)
}else{
  alert(`The Result is ${score} out of ${state.length}`)
  setCurrentValue(0)
  setQuestionNumber(0)
  setScore(0)
}

} 

if(!state.length){
  return <h2>Loading...</h2>
}
  return (
    <div className="App">
      {score}
      <h5>{QuestionNumber}/{state.length}</h5>
      <QuestionCards 
      question={state[currentValue].question}
      options={state[currentValue].option}
      callback={CallFunction}
      />
    </div>
  );
}

export default App;
