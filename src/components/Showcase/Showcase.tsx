import { ShowcaseStyled } from "./ShowcaseStyled";
import { CustomLink } from "../Utility";

export const Showcase = () => {
    return (
        <ShowcaseStyled>
            <h1>Movie Quiz</h1>
            <h2>Satisfy your free time with some movie-relatd questions.</h2>
            <CustomLink type="secondary" to="/start">Get Started</CustomLink>
        </ShowcaseStyled>
    )
}