import { ReactElement } from "react";
import { Question } from "./Question/Question";
import { QuizStyled } from "./QuizStyled";
import { Timer } from "./Timer/Timer";

export const Quiz: () => ReactElement = () => {

    return (
        <QuizStyled>
            <Timer>
                <h2>2 : 00</h2>
            </Timer>
            <Question>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ut eius beatae.</Question>
        </QuizStyled>
    )
}