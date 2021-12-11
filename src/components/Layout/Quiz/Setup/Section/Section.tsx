import styled from "styled-components";

const SectionStyled = styled.div`
    & > h2 {
        /* margin-bottom: 0.5rem; */
        /* color: teal; */
        /* margin-left: -1rem; */
    }
`

export const Section: React.FC = ({ children }) => {
    return (
        <SectionStyled>{children}</SectionStyled>
    )
}