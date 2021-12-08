import { useContext, useEffect, useState, ChangeEvent } from "react";
import { Form } from "./Form/Form";
import { RadioInput } from "../../../Utility";
import { Header } from "./Header/Header";
import { Question } from "./Question/Question";
import { GameStyled } from "./GameStyled";
import { DispatchContext, StateContext } from "../../../../store/context";
import { InitialStateType } from "../../../../store/reducer";
import { restructure } from "./customize-game-data";
import { StageQuestionObject } from "../../../../types/types";
import { decode } from 'html-entities'

export const Game = () => {
    const { apiData, questions, formData, remainingGameTime } = useContext(StateContext) as InitialStateType
    const dispatch = useContext(DispatchContext)
    const [stage, setStage] = useState<number>(0)
    const [currentQuestion, setCurrentQuestion] = useState<StageQuestionObject|null>(null)

    useEffect(() => {
        if(!apiData.length) {return}
        // save array of restructured questions
        const restructuredData = restructure(apiData)
        dispatch({ type: 'STORE_RESTRUCTURED_DATA', payload: restructuredData })
        
        if(formData?.time === '0') {
            // return setGameTime(null)
            return dispatch({ type: 'UPDATE_REMAINING_TIME', payload: null })
        }

        // setGameTime(Number(formData?.time))
        dispatch({ type: 'UPDATE_REMAINING_TIME', payload: Number(formData?.time) })
        // console.log('restructure useEffect ran!')
    }, [apiData])
    
    useEffect(() => {
        // Filter out current stage question based on stage state value.
        const [curr] = questions.filter(question => question.stage === stage)
        setCurrentQuestion(curr)
        // console.log('setting current question useEffect ran!')
    }, [questions, stage])

    useEffect(() => {
        // return if remainingGameTime is still not set by first useEffect
        if(remainingGameTime === null) {return}
        let interval = setInterval(() => {
            // setGameTime(gameTime - 1)
            dispatch({ type: 'UPDATE_REMAINING_TIME', payload: remainingGameTime - 1 })
        }, 1000)
        if(remainingGameTime < 0) {
            clearInterval(interval);
            return dispatch({ type: 'FINISH_GAME'})
        }
        
        return () => {
            clearInterval(interval)
        }
    }, [remainingGameTime])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const { correctAnswer } = currentQuestion!

        const newQuestions = [...questions]
        newQuestions[stage] = {
            ...questions[stage],
            answer: value,
            isCorrect: value === correctAnswer,
        }
        
        dispatch({ type: 'UPDATE_CURRENT_QUESTION', payload: newQuestions })
        
        setTimeout(() => {
            setStage(stage + 1)
            if((stage + 1) === (questions.length)) {
                dispatch({ type: 'FINISH_GAME'})
                console.log('Finished: ', questions)
            }
        }, 1000)
    }
    
    // bgColor: determines the background-color of RadioInput with correct answer.
    // selectedBgColor: determines the background-color of selected RadioInput by user.
    // For more info, check out Utility/Button/index.tsx file
    let displayedRadioInputs = currentQuestion?.allAnswers.map(answer => (
        <RadioInput name="answer" bgColor={currentQuestion.answer && currentQuestion.correctAnswer === answer ? 'green': null} selectedBgColor={currentQuestion.answer && currentQuestion.correctAnswer === answer ? 'green': 'red'} selected={currentQuestion.answer === answer} value={answer} onChange={onChangeHandler} key={answer}>{decode(answer)}</RadioInput>
    ))

    return (
        <GameStyled>
            <Header formData={formData} questions={questions} currentQuestion={currentQuestion} />
            <Question text={decode(currentQuestion?.question)}/>
            <Form>
                {displayedRadioInputs}
            </Form>
        </GameStyled>
    )
}