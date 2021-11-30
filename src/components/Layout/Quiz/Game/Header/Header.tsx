import styled from "styled-components";
import { FORMDATA, StageQuestionObject } from "../../../../../types/types"
import { BottomHeader } from "./BottomHeader/BottomHeader"
import { TopHeader } from "./TopHeader/TopHeader"

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid gray;
`

interface HeaderProps {
    gameTime: number|null;
    questions: StageQuestionObject[];
    currentQuestion: StageQuestionObject|null;
    formData: FORMDATA|null
}

export const Header= ({ formData, gameTime, questions, currentQuestion }: HeaderProps) => {
    return (
        <HeaderStyled>
            <TopHeader category={formData?.category} level={formData?.level} />
            <BottomHeader questions={questions} currentQuestion={currentQuestion} gameTime={gameTime}/>
        </HeaderStyled>
    )
}