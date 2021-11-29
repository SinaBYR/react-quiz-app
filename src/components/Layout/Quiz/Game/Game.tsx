import { useContext, useEffect, useState, ChangeEvent } from "react";
import { Form } from "./Form/Form";
import { RadioInput } from "../../../Utility";
import { Header } from "./Header/Header";
import { Question } from "./Question/Question";
import { GameStyled } from "./GameStyled";
import { Stage } from "./Header/Stage/Stage";
import { Timer } from "./Header/Timer/Timer";
import { StateContext } from "../../../../store/context";
import { InitialStateType } from "../../../../store/reducer";
import { restructure } from "./customize-game-data";
import { StageQuestionObject } from "../../../../types/types";
import { decode } from 'html-entities'
import { Time } from "../Quiz";
import { remainingTime } from "./remaining-time";
import { useInterval } from "../../../../hooks/useInterval";

export const Game = () => {
    const { result, formData } = useContext(StateContext) || {} as InitialStateType
    const [stage, setStage] = useState<number>(0)
    const [questions, setQuestions] = useState<StageQuestionObject[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<StageQuestionObject|null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(true)
    const [gameTime, setGameTime] = useState<number|null>(null)

    useEffect(() => {
        if(!result.length) {return}
        setQuestions(restructure(result))
        if(formData?.time === '0') {
            return setGameTime(null)
        }

        setGameTime(Number(formData?.time))
        // console.log('restructure useEffect ran!')
    }, [result])
    
    useEffect(() => {
        // Filter out current stage question based on stage state value.
        const [curr] = questions.filter(question => question.stage === stage)
        setCurrentQuestion(curr)
        // console.log('setting current question useEffect ran!')
    }, [questions, stage])

    useEffect(() => {
        // return if gameTime is still not set by first useEffect
        if(gameTime === null) {return}
        let interval = setInterval(() => {
            setGameTime(gameTime - 1)
        }, 1000)
        if(gameTime < 0) {
            clearInterval(interval);
            return setIsPlaying(false)
        }
        
        return () => {
            clearInterval(interval)
        }
    })
    // if(gameTime) {
    //     console.log(remainingTime(gameTime))
    // }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const { correctAnswer } = currentQuestion!

        const newQuestions = [...questions]
        newQuestions[stage] = {
            ...questions[stage],
            answer: value,
            isCorrect: value === correctAnswer,
        }
        
        setQuestions(newQuestions)
        
        setTimeout(() => {
            setStage(stage + 1)
            if((stage + 1) === (questions.length)) {
                setIsPlaying(false)
                console.log('Finished: ', questions)
            }
        }, 1500)
    }
    
    // bgColor: determines the background-color of RadioInput with correct answer.
    // selectedBgColor: determines the background-color of selected RadioInput by user.
    // For more info, check out Utility/Button/index.tsx file
    let displayedRadioInputs = currentQuestion?.allAnswers.map(answer => (
        <RadioInput name="answer" bgColor={currentQuestion.answer && currentQuestion.correctAnswer === answer ? 'green': null} selectedBgColor={currentQuestion.answer && currentQuestion.correctAnswer === answer ? 'green': 'red'} selected={currentQuestion.answer === answer} value={answer} onChange={onChangeHandler} key={answer}>{decode(answer)}</RadioInput>
    ))

    return (
        <GameStyled>
            {isPlaying ?
            <>
                <Header>
                    {currentQuestion ? <Stage current={currentQuestion.stage + 1} total={questions.length}/>: null}
                    {
                    <Timer>
                        <h2>{gameTime ? remainingTime(gameTime) : '-- : --'}</h2>
                    </Timer>
                    }
                    <p>{result[0].difficulty}</p>
                </Header>
                {currentQuestion ? <Question>{decode(currentQuestion.question)}</Question> : null}
                <Form>
                    {displayedRadioInputs}
                </Form>
            </>
            :
            <div>
                {questions.map(({answer, question}) => {
                    return (
                        <div style={{padding: '1rem', color: 'black'}} key={question}>{answer}</div>
                    )
                })}
            </div>
            }


        </GameStyled>
    )
}

{/* <div>
{questions.map(({answer, question}) => {
    return (
        <div style={{padding: '1rem'}} key={question}>{answer}</div>
    )
})}
</div>
<button onClick={() => {
setStage(stage + 1)
}}>Next</button>
<button onClick={() => {
// console.log('api result: ', result)
console.log('questions: ', questions)
}}>Show</button> */}