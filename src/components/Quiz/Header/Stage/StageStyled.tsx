import styled from "styled-components"

export const StageStyled = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    color: ${({ theme }) => theme.colors.secondary};
    color: #1F1D36;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
    line-height: 1.2;
    border-radius: 2px;
`