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
let[result,setResult]=useState(false)
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
  // alert(`The Result is ${score} out of ${state.length}`)
  setResult(true)
  // setCurrentValue(0)
  // setQuestionNumber(0)
  // setScore(0)
}
}
//Thiis show the result our in plan page as we are showing loading
if(result){
    return(
      <div className="result sub-container">
        <h3>Final Result</h3>
        <p>The Result is {score} out of {state.length} 🔔</p>
        <button className="button" onClick={() =>{ 
          setCurrentValue(0)
          setQuestionNumber(1)
           setScore(0)
           setResult(false)
        }}>RESTART</button>
      </div>
    )
} 

if(!state.length){
  return <h2>Loading...</h2>
}
  return (
    <div>
     <h2 className={score > 5? "green" : "red"}>Score: {score}</h2>
      <h5 className="ques-nub">Question NO: {QuestionNumber}/{state.length}</h5>
      <QuestionCards 
      question={state[currentValue].question}
      options={state[currentValue].option}
      callback={CallFunction}
      />
    </div>
  );
}

export default App;
