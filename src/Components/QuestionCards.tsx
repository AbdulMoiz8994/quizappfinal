import React,{useState} from 'react'

import {Props} from '../Types/Types'

export const QuestionCards:React.FC<Props> = ({question,options,callback}) => {
//  console.log(question,options);

let[data,setData]=useState("");

const OnChnageFunc=(e:any) =>{ 
    setData(e.target.value)
}

    return (
        <div>
            <h3>{question}</h3>
            <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e,data)}>
        {options.map((values) =>{
            return(
            <div key={values}>
            <label>
            <input 
            type="radio" 
            name="opt" 
            required
            value={values} 
            // checked={data === values}
            onChange={OnChnageFunc}
            />
                {values}
            </label>
            </div>
            )
        })}
        <button type="submit">Next Question</button>
        </form>
        </div>
    )
}
 