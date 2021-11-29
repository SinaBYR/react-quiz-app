import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 150px;
    /* background-color: red; */
    border-bottom: 1px solid gray;

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
`