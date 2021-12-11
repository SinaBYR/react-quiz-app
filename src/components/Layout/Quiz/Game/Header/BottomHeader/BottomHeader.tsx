import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../../../store/context";
import { InitialStateType } from "../../../../../../store/reducer";
import { StageQuestionObject } from "../../../../../../types/types";
import { remainingTime } from "../../remaining-time";
import { Stage } from "./Stage/Stage";
import { Timer } from "./Timer/Timer";

const BottomHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 75%;

    & > * {
        flex: 1;
        display: flex;
        justify-content: center;
    }
`

interface BottomHeaderProps {
    questions: StageQuestionObject[];
    currentQuestion: StageQuestionObject|null;
}

export const BottomHeader = ({ questions, currentQuestion }: BottomHeaderProps) => {
    const { remainingGameTime } = useContext(StateContext) as InitialStateType
    return (
        <BottomHeaderStyled>
            {currentQuestion && <div><Stage current={currentQuestion.stage + 1} total={questions.length}/></div>}
            <div>
                <Timer>
                    <h2>{remainingGameTime !== null ? remainingTime(remainingGameTime) : '-- : --'}</h2>
                </Timer>
            </div>
        </BottomHeaderStyled>
    )
}