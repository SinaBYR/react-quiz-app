import { Button } from "../Utility/Button";
import { ShowcaseStyled } from "./ShowcaseStyled";

export const Showcase = () => {
    return (
        <ShowcaseStyled>
            <h1>Movie Quiz</h1>
            <h2>Satisfy your free time with some movie-relatd questions.</h2>
            {/* <Button type="primary">Get Started</Button> */}
            <Button type="secondary">Get Started</Button>
            {/* <Button type="warning">Get Started</Button> */}
        </ShowcaseStyled>
    )
}