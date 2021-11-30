import styled from "styled-components";

const TopHeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;

    & > * {
        text-transform: capitalize;
    }

    & > *:first-child {
        padding: 0 2.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    }
`

interface TopHeaderProps {
    category: string|undefined;
    level: string|undefined;
}

export const TopHeader = ({ category, level }: TopHeaderProps) => {
    return (
        <TopHeaderStyled>
            <p>{category}</p>
            <p>{level}</p>
        </TopHeaderStyled>
    )
}