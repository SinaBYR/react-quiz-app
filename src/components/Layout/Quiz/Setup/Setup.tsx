import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button, RadioInput } from "../../../Utility";
import { Section } from "./Section/Section";
import { SectionWrapper } from "./Section/SectionWrapper/SectionWrapper";

const SetupStyled = styled.div`
    width: 100%;
    max-width: 860px;
    background-color: #F7F6F2;
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 0 8px #D0CAB2;

    & > * {
        margin-bottom: 2rem;
    }
`

export const Setup: () => ReactElement = () => {
    return (
        <SetupStyled>
            <h1 style={{textAlign: 'center'}}>Quiz Setup</h1>
            <Section>
                <h2>Category</h2>
                <SectionWrapper>
                    <RadioInput type="radio" value="movies" name="category">General</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Movies</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Music</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Sports</RadioInput>
                    <RadioInput type="radio" value="movies" name="category">Video Games</RadioInput>
                </SectionWrapper>
            </Section>
            <Section>
                <h2>Number of questions</h2>
                <SectionWrapper>
                    <RadioInput type="radio" value="5" name="number-of-questions">5</RadioInput>
                    <RadioInput type="radio" value="10" name="number-of-questions">10</RadioInput>
                    <RadioInput type="radio" value="15" name="number-of-questions">15</RadioInput>
                    <RadioInput type="radio" value="20" name="number-of-questions">20</RadioInput>
                </SectionWrapper>
            </Section>
            <Section>
                <h2>Time</h2>
                <SectionWrapper>
                    <RadioInput type="radio" value="none" name="time">No time</RadioInput>
                    <RadioInput type="radio" value="1" name="time">1 min</RadioInput>
                    <RadioInput type="radio" value="2" name="time">2 min</RadioInput>
                    <RadioInput type="radio" value="5" name="time">5 min</RadioInput>
                </SectionWrapper>
            </Section>
            <Button style={{margin: '0 auto'}} type="secondary">Start Now</Button>
        </SetupStyled>
    )
}