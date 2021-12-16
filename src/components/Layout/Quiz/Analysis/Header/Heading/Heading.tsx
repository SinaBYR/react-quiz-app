import styled from "styled-components"

const HeadingStyled = styled.div`
    color: #EEEEEE;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 4px;
    border: 1px solid gray;
    
    & span {
        color: white;
        background-color: #008a00;
        font-size: 1.5rem;
        font-weight: bolder;
        padding: 0.5rem;
        border: 1px solid white;
    }
`

export const Heading = ({ time }: { time: number }) => {
    return (
        <HeadingStyled>
            <p>You finished the quiz <span>{time}</span> seconds earlier.</p>
        </HeadingStyled>
    )
}