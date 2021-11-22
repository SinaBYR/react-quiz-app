import { StageStyled, StageCurrent, StageTotal, StageSlash } from "./StageStyled"

export const Stage: React.FC<{ current: string|number, total: string|number }> = ({ current, total }) => {
    return (
        <StageStyled>
            <StageCurrent>{current}</StageCurrent>
            <StageSlash />
            <StageTotal>{total}</StageTotal>
        </StageStyled>
    )
}