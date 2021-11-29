import styled from "styled-components";
import { Theme } from '../../../../../../theme/theme';

export const TimerStyled = styled.div`
    width: 180px;
    & h2 {
        font-size: 3rem;
    }

    @media(max-width: 479px) {
        & h2 {
            font-size: 2rem
        }
    }
`