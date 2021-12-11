import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;

    & span {
        text-decoration: underline;
        font-style: italic;
    }
`