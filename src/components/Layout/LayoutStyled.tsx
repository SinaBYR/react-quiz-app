import styled from 'styled-components';

export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};

    & > *:first-child {
        margin-top: auto;
    }

    & > *:last-child {
        margin-top: auto;
    }
`