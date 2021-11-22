import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { FORMDATA } from "../../../../types/types";
import { Button, RadioInput } from "../../../Utility";
import { Section } from "./Section/Section";
import { SectionWrapper } from "./Section/SectionWrapper/SectionWrapper";
import { BeatLoader } from 'react-spinners';

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

export const Setup = ({ start, loading }: { start: (config: FORMDATA) =>  void; loading: boolean}) => {
    const [formData, setFormData] = useState<FORMDATA>({
        category: 'general',
        noq: '10',
        time: '2',
        difficulty: 'medium'
    })

    const onChangeHandler = (e: ChangeEvent) => {
        setFormData({
            ...formData,
            [e.target.getAttribute('name')!]: e.target.getAttribute('value')
        })
        console.log(formData.time)
    }

    return (
        <SetupStyled>
            <h1 style={{textAlign: 'center'}}>Quiz Setup</h1>
            <Section>
                <h2>Category</h2>
                <SectionWrapper>
                    <RadioInput type="radio" value="general" checked={formData.category === 'general'} name="category" onChange={onChangeHandler}>General</RadioInput>
                    <RadioInput type="radio" value="movies" checked={formData.category === 'movies'} name="category" onChange={onChangeHandler}>Movies</RadioInput>
                    <RadioInput type="radio" value="music" checked={formData.category === 'music'} name="category" onChange={onChangeHandler}>Music</RadioInput>
                    <RadioInput type="radio" value="sports" checked={formData.category === 'sports'} name="category" onChange={onChangeHandler}>Sports</RadioInput>
                    <RadioInput type="radio" value="video-games" checked={formData.category === 'video-games'} name="category" onChange={onChangeHandler}>Video Games</RadioInput>
                </SectionWrapper>
            </Section>
            <Section>
                <h2>Number of questions</h2>
                <SectionWrapper>
                    <RadioInput type="radio" name="noq" value="5" checked={formData.noq === '5'} onChange={onChangeHandler}>5</RadioInput>
                    <RadioInput type="radio" name="noq" value="10" checked={formData.noq === '10'} onChange={onChangeHandler}>10</RadioInput>
                    <RadioInput type="radio" name="noq" value="15" checked={formData.noq === '15'} onChange={onChangeHandler}>15</RadioInput>
                    <RadioInput type="radio" name="noq" value="20" checked={formData.noq === '20'} onChange={onChangeHandler}>20</RadioInput>
                </SectionWrapper>
            </Section>
            <Section>
                <h2>Difficulty</h2>
                <SectionWrapper>
                    <RadioInput type="radio" name="difficulty" value="easy" checked={formData.difficulty === 'easy'} onChange={onChangeHandler}>Easy</RadioInput>
                    <RadioInput type="radio" name="difficulty" value="medium" checked={formData.difficulty === 'medium'} onChange={onChangeHandler}>Medium</RadioInput>
                    <RadioInput type="radio" name="difficulty" value="hard" checked={formData.difficulty === 'hard'} onChange={onChangeHandler}>Hard</RadioInput>
                </SectionWrapper>
            </Section>
            <Section>
                <h2>Time</h2>
                <SectionWrapper>
                    <RadioInput type="radio" name="time" value="0" checked={formData.time === '0'} onChange={onChangeHandler}>No time</RadioInput>
                    <RadioInput type="radio" name="time" value="1" checked={formData.time === '1'} onChange={onChangeHandler}>1 min</RadioInput>
                    <RadioInput type="radio" name="time" value="2" checked={formData.time === '2'} onChange={onChangeHandler}>2 min</RadioInput>
                    <RadioInput type="radio" name="time" value="5" checked={formData.time === '5'} onChange={onChangeHandler}>5 min</RadioInput>
                </SectionWrapper>
            </Section>
            <Button style={{margin: '0 auto'}} type="secondary" onClick={() => start(formData)}>
                {
                    loading ? <BeatLoader /> : 'Start Now'
                }
            </Button>
        </SetupStyled>
    )
}