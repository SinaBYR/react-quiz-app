import styled from "styled-components"

const QuestionStyled = styled.div`
    font-size: 1.5rem;
    padding: 1rem 0;
    text-align: center;

    @media(max-width: 479px) {
        & {
            font-size: 1.2rem;
        }
    }
`

export const Question = ({ text }: { text: string }) => {
    return (
        <QuestionStyled>{text}</QuestionStyled>
    )
}