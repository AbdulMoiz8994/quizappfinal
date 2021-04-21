import {QuizOriginal,Quiz} from '../Types/Types'

const Sufflearray=(arr: any[])=>{
    return [...arr].sort(() => Math.random() - 0.5)
}

//this is string type
export  enum  Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard" 
}
//This is number type
export enum NumberQues{
    FIVE=5,
    TEN=10,
    TWENTY=20
}
// let arr:[number,...string[]]=[1,"moiz","malik"]

export const Services= async(totalQuestions: NumberQues,level: Difficulty):Promise<Quiz[]> =>{
    const fetchData=fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    const {results}=await(await fetchData).json();
    // console.log(results);
    const quiz=results.map((OriginalObj: QuizOriginal) =>{
        return({
          question: OriginalObj.question,
          answer:  OriginalObj.correct_answer,
          option: Sufflearray(OriginalObj.incorrect_answers.concat(OriginalObj.correct_answer)) 
     })
    })
    return quiz
}