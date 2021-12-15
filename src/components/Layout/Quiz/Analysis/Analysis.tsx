import styled from "styled-components";
import { StageQuestionObject } from "../../../../types/types";
import { Body } from "./Body/Body";
import { Header } from "./Header/Header";
import { Results } from "./Results/Results";

const AnalysisStyled = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 100%;
    max-width: 860px;
    min-height: 480px;
    background-color: #F7F6F2;
    /* background-color: black; */
    padding: 2rem;
    margin: 0 auto;
    /* text-align: center; */
    border-radius: 4px;
    box-shadow: 0 0 8px #D0CAB2;
`

interface AnalysisProps {
    results: StageQuestionObject[]
}

export const Analysis = ({ results }: AnalysisProps) => {
    return (
        <AnalysisStyled>
            <Header />
            <Body />
            {/* <Results results={results}/> */}
        </AnalysisStyled>
    )
}