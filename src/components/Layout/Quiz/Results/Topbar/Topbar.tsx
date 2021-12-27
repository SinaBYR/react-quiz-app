import { useContext } from "react"
import styled from "styled-components"
import { DispatchContext } from "../../../../../store/context"
import { Button } from "../../../../Utility"

const TopbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
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