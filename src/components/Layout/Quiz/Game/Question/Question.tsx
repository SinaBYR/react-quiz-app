import React from "react"
import { QuestionStyled } from "./QuestionStyled"

export const Question: React.FC = ({ children }) => {
    return <QuestionStyled>{children}</QuestionStyled>
}