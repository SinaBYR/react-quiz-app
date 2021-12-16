import styled from "styled-components"
import { useContext } from "react"
import { StateContext } from "../../../../../../store/context"
import { InitialStateType } from "../../../../../../store/reducer"

const GameSetupStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 190px;
    color: #EEEEEE;
    padding: 1rem;
    padding-right: 2rem;
    border-right: 1px solid gray;
`

const ItemsWrapperStyled = styled.div`
    display: flex;

    & > *:first-child {
        opacity: 0.75;
        margin-right: auto;
    }

    & > *:last-child {
        font-weight: 800;
    }
`

const ItemStyled = styled.div`
    margin: 18px 0;

    & > * {
        margin-bottom: 12px;
    }
`

export const GameSetup = () => {
    const { formData, remainingGameTime } = useContext(StateContext) as InitialStateType
    return (
        <GameSetupStyled>
            <h2>Game Setup</h2>
            <ItemsWrapperStyled>
                <ItemStyled>
                    <div>Category</div>
                    <div>Difficulty</div>
                    <div>Time</div>
                    <div>Number of Questions</div>
                </ItemStyled>
                <ItemStyled>
                    <div style={{textTransform: 'capitalize'}}>{formData?.category}</div>
                    <div style={{textTransform: 'capitalize'}}>{formData?.level}</div>
                    <div>{Number(formData?.time)/60} min(s)</div>
                    <div>{formData?.noq}</div>
                </ItemStyled>
            </ItemsWrapperStyled>
        </GameSetupStyled>
    )
}