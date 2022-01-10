import React from "react";
import styled from "styled-components";

const SectionWrapperStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;

    & > * {
        margin-right: 0.5rem;
    }

    & > *:last-child {
        margin-right: 0;
    }

    @media(max-width: 479px) {
        & {
            flex-direction: column;
        }

        & > * {
            margin-right: 0rem;
            margin-bottom: 0.5rem;
        }
    }
`

// export const SectionWrapper: ({ children, ...rest }: HTMLElementAttributes) => React.ReactElement = ({ children, ...rest }) => {
//     return <SectionWrapperStyled {...rest}>{children}</SectionWrapperStyled>
// }

export const SectionWrapper: React.FC = ({ children, ...rest }) => {
    return <SectionWrapperStyled {...rest}>{children}</SectionWrapperStyled>
}