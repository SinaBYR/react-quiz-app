import { FooterStyled } from "./FooterStyled"

const Footer = () => {
    return (
        <FooterStyled>
            {/* <p>Developed by Sina Beyraghdar.</p> */}
            <p>Quiz Data Provided by <a href="https://opentdb.com/" target="_blank" rel="noopener noreferrer">Open Trivia Database</a>.</p>
            {/* github link */}
        </FooterStyled>
    )
}

export { Footer }