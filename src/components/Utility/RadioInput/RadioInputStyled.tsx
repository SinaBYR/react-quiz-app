import styled from "styled-components";

export const InputWrapperStyled = styled.div`
    position: relative;
    /* min-width: 50px; */
    padding: 1rem;
    width: 100%;
    height: 40px;
    text-align: center;
`
/* Nullish check of bgColor is because we've used RadioInput component not only in Game component */
/* but also in Setup component.*/
export const InputFillStyled = styled.div<{ bgColor?: string|null }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ bgColor }) => bgColor ? bgColor : '#2f4858'};
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
    font-size: 1.1rem;
    z-index: 3;
    pointer-events: none;

`

export const InputStyled = styled.input<{ selectedBgColor?: string|null}>`
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
        /* Nullish check of selectedBgColor is because we've used RadioInput component not only in Game component */
        /* but also in Setup component.*/
        background-color: ${({ selectedBgColor }) => selectedBgColor ? selectedBgColor : 'green'};
    }
`
