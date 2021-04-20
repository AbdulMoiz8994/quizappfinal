import {QuizOriginal,Quiz} from '../Types/Types'

const Sufflearray=(arr: any[])=>{
    return [...arr].sort(() => Math.random() - 0.5)
}


export const Services= async(totalQuestions: number,level: string):Promise<Quiz[]> =>{
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