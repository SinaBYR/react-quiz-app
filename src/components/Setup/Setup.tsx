import React, { ReactElement } from "react";
import styled from "styled-components";
import { RadioInput } from "../Utility";
import { Category } from "./Category/Category";
import { CategoryWrapper } from "./Category/CategoryWrapper/CategoryWrapper";

const SetupStyled = styled.div`
    max-width: 860px;
    background-color: #DED9C4;
    background-color: #D0CAB2;
    background-color: #F7F6F2;
    padding: 1rem;
    margin: 0 auto;

    & > * {
        margin-bottom: 4rem;
    }
`

export const Setup:  () => ReactElement = () => {
    return (
        <SetupStyled>
            <Category>
                <h2>Category</h2>
                <CategoryWrapper>
                    <RadioInput type="radio" value="movies" name="category">Movies</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Music</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Sports</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Video Games</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">General</RadioInput>
                </CategoryWrapper>
            </Category>
            <Category>
                <h2>Category</h2>
                <CategoryWrapper>
                    <RadioInput type="radio" value="movies">Movies</RadioInput>
                    <RadioInput type="radio" value="movies">Music</RadioInput>
                    <RadioInput type="radio" value="movies">Sports</RadioInput>
                    <RadioInput type="radio" value="movies">Video Games</RadioInput>
                    <RadioInput type="radio" value="movies">General</RadioInput>
                </CategoryWrapper>
            </Category>
        </SetupStyled>
    )
}