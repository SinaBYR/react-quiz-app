import styled from "styled-components"
import { remainingTimeAfterGame } from "./remainingTimeAfterGame"
import { AiFillStar } from 'react-icons/ai'

const HeadingStyled = styled.div`
    display: flex;
    align-items: center;
    color: #EEEEEE;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 4px;
    border: 1px solid gray;

    & span {
        font-size: 1.5rem;
        text-decoration: underline;
    }
`

const IconStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 0.5rem;
    margin-right: 16px;
    border-radius: 50%;
`

export const Heading = ({ time }: { time: number }) => {
    return (
        <HeadingStyled>
            <IconStyled>
                <AiFillStar color="#303a41" fontSize="24px"/>
            </IconStyled>
            <p>You finished the quiz <span>{remainingTimeAfterGame(time)}</span> early.</p>
        </HeadingStyled>
    )
}