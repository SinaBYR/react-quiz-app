import styled from "styled-components";
import { Theme } from '../../../theme/theme';

export const TimerStyled = styled.div`
    padding: 1rem;
    color: ${({ theme }: { theme: Theme}) => theme.colors.alt};

    & h2 {
        font-size: 3rem;
    }
`