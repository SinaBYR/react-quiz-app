import styled from "styled-components";

export const InputWrapperStyled = styled.div`
    position: relative;
    width: 300px;
    height: 80px;
`

export const InputFillStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: ${({theme}) => theme.colors.alt}; */
    border: ${({theme}) => theme.colors.alt + ' 2px solid'};
    border-radius: 4px;
    z-index: 0;
`

export const InputLabel = styled.label`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 3;
    pointer-events: none;
`

export const InputStyled = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: none;
    z-index: 1;
    opacity: 0;
    cursor: pointer;

    &:checked + ${InputFillStyled} {
        background-color: green;
    }
`
