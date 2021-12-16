import styled from "styled-components"
import { decode } from "html-entities"

const QuestionStyled = styled.div`
    display: flex;
    color: white;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 1rem;
    margin-top: 1rem;
`

const SidePanelStyled = styled.div`
    margin-right: 1rem;
`

const QuestionStageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    max-width: 100px;
    height: 100px;
    height: 75px;
    background-color: #303a41;
    font-size: 2.5rem;
    margin-bottom: 8px;
    border-radius: 1px;
`

const QuestionTruthSign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border-radius: 1px;
    text-align: center;
`

const QuestionBodyStyled = styled.div`
    width: 100%;
    line-height: 1.4;
`

const QuestionTextStyled = styled.div`
    width: 100%;
`

const AnswersWrapperStyled = styled.div`
    display: flex;
    font-size: 14px;
    margin-top: 12px;

    & > *:first-child {
        margin-right: 2rem;
    }

    & > * {
        width: 290px;

        & > div {
            display: inline-block;
            background-color: #636363;
            padding: 0.125rem 0.25rem;
            font-size: 14px;
            margin-bottom: 4px;
        }
    }
`

interface QuestionProps {
    stage: number
    isCorrect: boolean | null
    question: string
    answer: string | null
    correctAnswer: string
}

export const Question = ({ stage, isCorrect, question, answer, correctAnswer }: QuestionProps) => {
    return (
        <QuestionStyled>
            <SidePanelStyled>
                <QuestionStageStyled>{stage + 1}</QuestionStageStyled>
                <QuestionTruthSign style={{backgroundColor: isCorrect === null ? 'gray' : isCorrect === false ? '#d41212' : '#008a00'}}>
                    {isCorrect === null ? 'Not Answered' : isCorrect === false ? 'Incorrect' : 'Correct'}
                </QuestionTruthSign>
            </SidePanelStyled>
            <QuestionBodyStyled>
                <QuestionTextStyled>
                    <p>{decode(question)}</p>
                </QuestionTextStyled>
                <AnswersWrapperStyled>
                    <div>
                        <div>Your Answer</div>
                        <p>{answer ? decode(answer) : 'Not answered'}</p>
                    </div>
                    <div>
                        <div>Correct Answer</div>
                        <p>{decode(correctAnswer)}</p>
                    </div>
                </AnswersWrapperStyled>
            </QuestionBodyStyled>
        </QuestionStyled>
    )
}