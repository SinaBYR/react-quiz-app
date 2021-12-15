import styled from "styled-components"
import { StageQuestionObject } from "../../../../../types/types"
import { decode } from "html-entities"

const ResultsStyled = styled.section`

`

interface ResultsProps {
    results: StageQuestionObject[]
}

const ResultStyled = styled.div`

`

export const Result: React.FC = ({ children }) => {
    return (
        <ResultStyled>
            {children}
        </ResultStyled>
    )
}

export const Results = ({ results }: ResultsProps) => {
    return (
        <ResultsStyled>
            {results.map(res => (
                <div key={res.stage}>
                    <h3>{decode(res.question)}</h3>
                    <p>{decode(res.answer)}</p>
                </div>
            ))}
        </ResultsStyled>
    )
}