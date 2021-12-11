import { StageStyled, StageCurrent, StageTotal, StageSlash } from "./StageStyled"

interface StageProps {
    current: string|number;
    total: string|number;
}

export const Stage = ({ current, total }: StageProps) => {
    return (
        <StageStyled>
            <StageCurrent>{current}</StageCurrent>
            <StageSlash />
            <StageTotal>{total}</StageTotal>
        </StageStyled>
    )
}