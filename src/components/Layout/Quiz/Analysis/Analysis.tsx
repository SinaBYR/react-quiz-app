import styled from "styled-components";
import { Body } from "./Body/Body";
import { Header } from "./Header/Header";

const AnalysisStyled = styled.div`
    width: 100%;
    max-width: 860px;
    min-height: 480px;
    background-color: #F7F6F2;
    padding: 2rem;
    margin: 0 auto;
    box-shadow: 0 0 8px #D0CAB2;
    border-radius: 4px;

    & h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const Analysis = () => {
    return (
        <AnalysisStyled>
            <h1>Quiz Recap</h1>
            <Header />
            <Body />
        </AnalysisStyled>
    )
}