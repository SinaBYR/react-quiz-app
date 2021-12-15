import styled from "styled-components"
import { Chart } from "./Chart/Chart"
import { GameSetup } from "./GameSetup/GameSetup"
import { Heading } from "./Heading/Heading"

const HeaderStyled = styled.header`
    display: block;
`

const WrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Header = () => {
    return (
        <HeaderStyled>
            <WrapperStyled>
                <GameSetup />
                <Chart />
            </WrapperStyled>
            {/* <Heading /> */}
        </HeaderStyled>
    )
}