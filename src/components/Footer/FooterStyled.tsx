import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vh;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    & span {
        text-decoration: underline;
        font-style: italic;
    }
`