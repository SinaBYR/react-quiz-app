import { ReactElement } from "react";
import { Form } from "./Form/Form";
import { RadioInput } from "../../../Utility";
import { Header } from "./Header/Header";
import { Question } from "./Question/Question";
import { GameStyled } from "./GameStyled";
import { Stage } from "./Header/Stage/Stage";
import { Timer } from "./Header/Timer/Timer";

export const Game: () => ReactElement = () => {

    return (
        <GameStyled>
            <Header>
                <Stage>1</Stage>
                <Timer>
                    <h2>2 : 00</h2>
                    <p style={{letterSpacing: '4px'}}>remaining</p>
                </Timer>
            </Header>
            <Question>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ut eius beatae ut eius beatae.</Question>
            <Form>
                <RadioInput type="radio" value="hello">Option 1</RadioInput>
                <RadioInput type="radio" value="hello">Option 2</RadioInput>
                <RadioInput type="radio" value="hello">Option 3</RadioInput>
                <RadioInput type="radio" value="hello">Option 4</RadioInput>
            </Form>
        </GameStyled>
    )
}