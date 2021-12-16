import styled from "styled-components"
import { remainingTimeAfterGame } from "./remainingTimeAfterGame"
import { MdAutoAwesome } from 'react-icons/md'
import { IoIosCloudDone } from 'react-icons/io'
import { BsLightbulb } from 'react-icons/bs'

const HeadingStyled = styled.div`
    display: flex;
    align-items: center;
    color: #EEEEEE;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 4px;
    border: 1px solid gray;
    
    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #303a41;
        padding: 1rem;
        margin-right: 16px;
        border-radius: 1px;
        box-shadow: 0 0 4px #171d1f;
    }
`

export const Heading = ({ time }: { time: number }) => {
    return (
        <HeadingStyled>
            <span>
                <BsLightbulb />
            </span>
            <p>{remainingTimeAfterGame(time)}</p>
        </HeadingStyled>
    )
}