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
    background-color: ${({theme}) => theme.colors.alt};
    background-color: #F5C6A5;
    background-color: #ffa742;
    background-color: #2f4858;
    /* border: ${({theme}) => theme.colors.primary + ' 2px solid'}; */
    border-radius: 4px;
    z-index: 0;
`

export const InputLabel = styled.label`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: white;
    font-size: 1.5rem;
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
