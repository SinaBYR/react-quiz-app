import { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../../../store/context"
import { InitialStateType } from "../../../../../store/reducer"
import { Question } from "./Question/Question"

const QuestionsStyled = styled.section`
    margin-top: 1rem;
    margin-top: 2rem;

    & h1 {
        text-align: center;
    }
`

export const Questions = () => {
    const { questions } = useContext(StateContext) as InitialStateType

    return (
        <QuestionsStyled>
            {questions.map(({ stage, isCorrect, question, answer, correctAnswer }) => (
                <Question
                    key={stage}
                    stage={stage}
                    isCorrect={isCorrect}
                    question={question}
                    answer={answer}
                    correctAnswer={correctAnswer}
                    />
            ))}
        </QuestionsStyled>
    )
}