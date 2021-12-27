import styled from "styled-components";
import { Questions } from "./Questions/Questions";
import { Header } from "./Header/Header";
import { Topbar } from "./Topbar/Topbar";

const ResultsStyled = styled.div`
    width: 100%;
    max-width: 860px;
    min-height: 480px;
    background-color: #F7F6F2;
    padding: 2rem;
    margin: 0 auto;
    box-shadow: 0 0 8px #D0CAB2;
    border-radius: 4px;
`

export const Results = () => {
    return (
        <ResultsStyled>
            <Topbar />
            <Header />
            <Questions />
        </ResultsStyled>
    )
}