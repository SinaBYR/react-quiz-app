import { ChangeEvent, ReactElement, useContext, useEffect, useState } from "react";
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

export const Game: () => ReactElement = () => {
    const { data } = useContext(StateContext) || {} as InitialStateType
    const [stage, setStage] = useState<number>(0)
    const [questions, setQuestions] = useState<StageQuestionObject[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<StageQuestionObject|null>(null) 

    useEffect(() => {
        if(!data.length) {return}
        setQuestions(restructure(data))
        // console.log('restructure useEffect ran!')
    }, [data])
    
    useEffect(() => {
        // Filter out current stage question based on stage state value.
        const [curr] = questions.filter(question => question.stage === stage)
        setCurrentQuestion(curr)
        // console.log('setting current question useEffect ran!')
    }, [questions, stage])

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

        if((stage + 1) === (questions.length)) {
            // console.log('Finished: ', questions)
        }
        setTimeout(() => {
            setStage(stage + 1)
        }, 500)
    }
    let displayedRadioInputs;
    displayedRadioInputs = currentQuestion?.allAnswers.map(answer => (
        <RadioInput type="radio" name="answer" value={answer} onChange={onChangeHandler} key={answer}>{decode(answer)}</RadioInput>
    ))

    return (
        <GameStyled>
            <Header>
                {currentQuestion ? <Stage current={currentQuestion.stage + 1} total={questions.length}/>: null}
                <Timer>
                    <h2>2 : 00</h2>
                    <p style={{letterSpacing: '4px'}}>remaining</p>
                </Timer>
            </Header>
            {currentQuestion ? <Question>{decode(currentQuestion.question)}</Question> : null}
            <Form>
                {displayedRadioInputs}
            </Form>
            {/* <div>
                {questions.map(({answer, question}) => {
                    return (
                        <div style={{padding: '1rem'}} key={question}>{answer}</div>
                    )
                })}
            </div> */}
            {/* <button onClick={() => {
                setStage(stage + 1)
            }}>Next</button>
            <button onClick={() => {
                // console.log('api data: ', data)
                console.log('questions: ', questions)
            }}>Show</button> */}
        </GameStyled>
    )
}