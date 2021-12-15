import styled from "styled-components"

const ResultStyled = styled.div`

`

export const Result: React.FC = ({ children }) => {
    return (
        <ResultStyled>
            {children}
        </ResultStyled>
    )
}