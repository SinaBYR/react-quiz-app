import { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../../../store/context"
import { InitialStateType } from "../../../../../store/reducer"
import { Question } from "./Question/Question"

const BodyStyled = styled.section`

`

export const Body = () => {
    const { questions } = useContext(StateContext) as InitialStateType

    return (
        <BodyStyled>
            {/* {questions.map((question))} */}
            <Question />
        </BodyStyled>
    )
}