import styled from "styled-components"

export const StageStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    font-size: 2rem;
    line-height: 1.2;
    border-radius: 2px;
`

export const StageCurrent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    color: ${({ theme }) => theme.colors.primary};
`

export const StageTotal = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    color: gray;
`

export const StageSlash = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 1px;
    height: 80%;
    background-color: gray;
`