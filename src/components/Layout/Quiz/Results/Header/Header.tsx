import { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../../../store/context"
import { InitialStateType } from "../../../../../store/reducer"
import { Chart } from "./Chart/Chart"
import { GameSetup } from "./GameSetup/GameSetup"
import { RemainingTime } from "./RemainingTime/RemainingTime"

const HeaderStyled = styled.header`
    display: block;
    background-color: ${({ theme }) => theme.colors.secondary};
`

const WrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 730px) {
        & {
            flex-direction: column;
        }
    }
`
export const Header = () => {
    const { remainingGameTime } = useContext(StateContext) as InitialStateType
    return (
        <HeaderStyled>
            <WrapperStyled>
                <GameSetup />
                <Chart />
            </WrapperStyled>
            {remainingGameTime && remainingGameTime > 0 && <RemainingTime time={remainingGameTime}/>}
        </HeaderStyled>
    )
}