import styled from "styled-components";
import { Theme } from '../../../../../../theme/theme';

export const TimerStyled = styled.div`
    padding: 1rem;
    color: ${({ theme }: { theme: Theme}) => theme.colors.secondary};
    /* background-color: #; */

    & h2 {
        font-size: 3rem;
    }
`