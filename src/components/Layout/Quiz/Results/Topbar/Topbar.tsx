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
`

export const Topbar = () => {
    const dispatch = useContext(DispatchContext)

    const onClickHandler = () => {
        dispatch({ type: 'START_NEW_GAME' })
    }

    return (
        <TopbarStyled>
            <h1>Quiz Recap</h1>
            <Button type="secondary" onClick={onClickHandler}>New Game</Button>
        </TopbarStyled>
    )
}