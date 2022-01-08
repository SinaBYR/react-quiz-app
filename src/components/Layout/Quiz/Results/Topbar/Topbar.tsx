import styled from "styled-components"
import { useContext } from "react"
import { DispatchContext } from "../../../../../store/context"
import { Button } from "../../../../Utility"
import { VscDebugRestart } from 'react-icons/vsc'

const TopbarStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    & > *:first-child {
        margin-right: auto;
    }

    & > *:last-child {
        margin-left: 0.5rem;
    }

    @media(max-width: 479px) {
        & > *:last-child {
            display: none;
        }
    }
`

interface TopbarProps {
    restart: () => void
}

export const Topbar = ({ restart } : TopbarProps) => {
    const dispatch = useContext(DispatchContext)

    const onClickHandler = () => {
        dispatch({ type: 'START_NEW_GAME' })
    }

    return (
        <TopbarStyled>
            <h1>Quiz Recap</h1>
            <Button type="secondary" onClick={onClickHandler}>New Game</Button>
            <Button type="secondary" onClick={restart}><VscDebugRestart /></Button>
        </TopbarStyled>
    )
}