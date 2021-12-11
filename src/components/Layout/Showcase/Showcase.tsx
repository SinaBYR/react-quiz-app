import styled from "styled-components";
import { Button } from "../../Utility"
import { MouseEventHandler } from "react"

const ShowcaseStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > h1 {
        font-size: 4rem;
        line-height: 1;
    }

    & > * {
        margin: 0.5rem 0;
    }
`;

export const Showcase = ({ clicked }: { clicked: MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <ShowcaseStyled>
            <h1>Movie Quiz</h1>
            <h2>Satisfy your free time with some movie-relatd questions.</h2>
            <Button type="secondary" onClick={clicked}>Get Started</Button>
        </ShowcaseStyled>
    )
}