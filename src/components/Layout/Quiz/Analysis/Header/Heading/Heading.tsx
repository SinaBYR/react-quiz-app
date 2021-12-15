import styled from "styled-components"

const HeadingStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #EEEEEE;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
    padding: 1rem;
    border-radius: 4px;
    
    & span {
        font-weight: bolder;
        font-size: 2rem;
        background-color: green;
        color: white;
        border: 1px solid white;
        padding: 0 1rem;
    }
`

export const Heading = () => {
    return (
        <HeadingStyled>
            <h3>You finished the quiz <span>13</span> seconds earlier.</h3>
        </HeadingStyled>
    )
}