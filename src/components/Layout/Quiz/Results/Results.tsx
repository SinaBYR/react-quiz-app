import styled, { css } from "styled-components";
import { Questions } from "./Questions/Questions";
import { Header } from "./Header/Header";
import { useEffect, useState } from "react";

const ResultsStyled = styled.div<{ mounted: boolean }>`
    width: 100%;
    max-width: 860px;
    min-height: 480px;
    background-color: #F7F6F2;
    padding: 2rem;
    margin: 0 auto;
    box-shadow: 0 0 8px #D0CAB2;
    border-radius: 4px;
    transition: transform 150ms;
    transform: translateX(-10px);

    ${({ mounted }) => mounted && css`
        transform: translateX(0);
    `}

    & h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const Results = () => {
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    })

    return (
        <ResultsStyled mounted={mounted}>
            <h1>Quiz Recap</h1>
            <Header />
            <Questions />
        </ResultsStyled>
    )
}