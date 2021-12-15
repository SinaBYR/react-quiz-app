import { useContext } from "react"
import styled from "styled-components"
import { StateContext } from "../../../../../../store/context"
import { InitialStateType } from "../../../../../../store/reducer"

const GameSetupStyled = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 350px;
    width: 400px;
    /* max-height: 200px; */
    height: 190px;
    /* border: 1px solid red; */
    /* border: 1px solid ${({ theme }) => theme.colors.secondary}; */
    background-color: ${({ theme }) => theme.colors.secondary};
    /* box-shadow: 0 0 4px ${({ theme }) => theme.colors.secondary}; */
    color: #EEEEEE;
    padding: 1rem;
    border-radius: 4px;
    margin-right: 4px;

    h2 {
        /* align-self: flex-start; */
        /* width: 180px; */
        text-align: left;
        /* border: 1px solid black; */
    }
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
    margin: 4px 0;
    margin: 16px 0;
    /* border: 1px solid black; */
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