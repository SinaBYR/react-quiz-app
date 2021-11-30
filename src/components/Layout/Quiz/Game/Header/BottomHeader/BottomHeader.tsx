import styled from "styled-components";
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
    gameTime: number|null;
    questions: StageQuestionObject[];
    currentQuestion: StageQuestionObject|null;
}

export const BottomHeader = ({ gameTime, questions, currentQuestion }: BottomHeaderProps) => {
    return (
        <BottomHeaderStyled>
            {currentQuestion && <div><Stage current={currentQuestion.stage + 1} total={questions.length}/></div>}
            <div>
                <Timer>
                    <h2>{gameTime ? remainingTime(gameTime) : '-- : --'}</h2>
                </Timer>
            </div>
        </BottomHeaderStyled>
    )
}