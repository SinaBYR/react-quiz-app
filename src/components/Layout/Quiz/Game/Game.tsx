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
    }, [data])
    
    useEffect(() => {
        // Filter out current stage question based on stage state value.
        const [curr] = questions.filter(question => question.stage === stage)
        setCurrentQuestion(curr)
    }, [questions.length, stage])

    const onChangeHandler = (e: ChangeEvent) => {
        // if(e.target.getAttribute('value') === currentQuestion?.correctAnswer) {
        //     setCurrentQuestion({
        //         ...currentQuestion,
        //         isCorrect: true
        //     })
        // }

        console.log(e.target.getAttribute('checked'))
    }
    
    let displayedRadioInputs;
    displayedRadioInputs = currentQuestion?.allAnswers.map(question => (
        <RadioInput type="radio" name="answer" disabled={currentQuestion.isCorrect} value={question} onChange={onChangeHandler} key={question}>{decode(question)}</RadioInput>
    ))

    function unicodeEscape(str: string) {
        for (var result = '', index = 0, charCode; !isNaN(charCode = str.charCodeAt(index++));) {
          result += '\\u' + ('0000' + charCode.toString(16)).slice(-4);
        }
        return result;
    }

    return (
        <GameStyled>
            <Header>
                {currentQuestion ? <Stage current={currentQuestion.stage + 1} total={questions.length}/>: null}
                <Timer>
                    <h2>2 : 00</h2>
                    <p style={{letterSpacing: '4px'}}>remaining</p>
                </Timer>
            </Header>
            {currentQuestion ? <Question>{currentQuestion.question}</Question> : null}
            <Form>
                {displayedRadioInputs}
            </Form>
            <button onClick={() => {
                console.log('api data: ', data)
                console.log('cutomized data: ', questions)
            }}>Show</button>
        </GameStyled>
    )
}