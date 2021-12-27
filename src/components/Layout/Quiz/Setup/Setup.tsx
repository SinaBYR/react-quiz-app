import styled, { css } from "styled-components";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FORMDATA } from "../../../../types/types";
import { Button, RadioInput } from "../../../Utility";
import { Section } from "./Section/Section";
import { SectionWrapper } from "./Section/SectionWrapper/SectionWrapper";
import { BeatLoader } from 'react-spinners';
import { StateContext } from "../../../../store/context";
import { InitialStateType } from "../../../../store/reducer";

const SetupStyled = styled.div<{ mounted: boolean }>`
    width: 100%;
    max-width: 860px;
    background-color: #F7F6F2;
    padding: 3rem;
    margin: 0 auto;
    box-shadow: 0 0 8px #D0CAB2;
    transition: transform 150ms;
    transform: translateX(-10px);

    ${({ mounted }) => mounted && css`
        transform: translateX(0);
    `}

    & > * {
        margin-bottom: 2rem;
    }
`

const ErrorStyled = styled.div`
    padding: 1rem;
    border: 1px solid red;
    border-radius: 2px;
`

export const Setup = ({ start, loading }: { start: (config: FORMDATA) =>  void; loading: boolean}) => {
    const { error } = useContext(StateContext) as InitialStateType
    const [formData, setFormData] = useState<FORMDATA>({
        category: 'general',
        noq: '10',
        time: '60',
        level: 'medium'
    })
    const [mounted, setMounted] = useState(false)
    const onChangeHandler = (e: ChangeEvent) => {
        setFormData({
            ...formData,
            [e.target.getAttribute('name')!]: e.target.getAttribute('value')
        })
    }

    useEffect(() => {
        setMounted(true)
    })

    return (
        <SetupStyled mounted={mounted}>
            <h1 style={{textAlign: 'center'}}>Quiz Setup</h1>
            <form>
                <Section>
                    <h2>Category</h2>
                    <SectionWrapper>
                        <RadioInput value="general" checked={formData.category === 'general'} name="category" onChange={onChangeHandler}>General</RadioInput>
                        <RadioInput value="movies" checked={formData.category === 'movies'} name="category" onChange={onChangeHandler}>Movies</RadioInput>
                        <RadioInput value="music" checked={formData.category === 'music'} name="category" onChange={onChangeHandler}>Music</RadioInput>
                        <RadioInput value="sports" checked={formData.category === 'sports'} name="category" onChange={onChangeHandler}>Sports</RadioInput>
                        <RadioInput value="video-games" checked={formData.category === 'video-games'} name="category" onChange={onChangeHandler}>Video Games</RadioInput>
                    </SectionWrapper>
                </Section>
                <Section>
                    <h2>Number of questions</h2>
                    <SectionWrapper>
                        <RadioInput name="noq" value="5" checked={formData.noq === '5'} onChange={onChangeHandler}>5</RadioInput>
                        <RadioInput name="noq" value="10" checked={formData.noq === '10'} onChange={onChangeHandler}>10</RadioInput>
                        <RadioInput name="noq" value="15" checked={formData.noq === '15'} onChange={onChangeHandler}>15</RadioInput>
                        <RadioInput name="noq" value="20" checked={formData.noq === '20'} onChange={onChangeHandler}>20</RadioInput>
                    </SectionWrapper>
                </Section>
                <Section>
                    <h2>Level</h2>
                    <SectionWrapper>
                        <RadioInput name="level" value="easy" checked={formData.level === 'easy'} onChange={onChangeHandler}>Easy</RadioInput>
                        <RadioInput name="level" value="medium" checked={formData.level === 'medium'} onChange={onChangeHandler}>Medium</RadioInput>
                        <RadioInput name="level" value="hard" checked={formData.level === 'hard'} onChange={onChangeHandler}>Hard</RadioInput>
                    </SectionWrapper>
                </Section>
                <Section>
                    <h2>Time</h2>
                    <SectionWrapper>
                        <RadioInput name="time" value="0" checked={formData.time === '0'} onChange={onChangeHandler}>No time</RadioInput>
                        <RadioInput name="time" value="60" checked={formData.time === '60'} onChange={onChangeHandler}>1 min</RadioInput>
                        <RadioInput name="time" value="120" checked={formData.time === '120'} onChange={onChangeHandler}>2 min</RadioInput>
                        <RadioInput name="time" value="300" checked={formData.time === '300'} onChange={onChangeHandler}>5 min</RadioInput>
                    </SectionWrapper>
                </Section>
            </form>
            {
                error && <ErrorStyled>An error occured. Please try again.</ErrorStyled>
            }
            <Button style={{margin: '0 auto'}} type="secondary" onClick={() => start(formData)}>
                {
                    loading ? <BeatLoader /> : 'Start Now'
                }
            </Button>
        </SetupStyled>
    )
}