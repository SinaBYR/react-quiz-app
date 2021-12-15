import styled from "styled-components"

const QuestionStyled = styled.div`
    display: flex;
    color: white;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 4px;
`

const SidePanelStyled = styled.div`
    margin-right: 1rem;
`

const QuestionStageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    max-width: 100px;
    height: 100px;
    height: 75px;
    background-color: #303a41;
    font-size: 2.5rem;
    margin-bottom: 8px;
    border-radius: 4px;
`

const QuestionTruthSign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: #01b801;
    background-color: #d41212;
    border-radius: 4px;
`

const QuestionBodyStyled = styled.div`
    width: 100%;
    line-height: 1.4;
`

const QuestionTextStyled = styled.div`
    width: 100%;
`

const AnswersWrapperStyled = styled.div`
    display: flex;
    font-size: 14px;
    margin-top: 12px;

    & > *:first-child {
        margin-right: 2rem;
    }

    & > * {
        /* border: 1px solid yellow; */
        width: 290px;

        & > div {
            display: inline-block;
            background-color: #797979;
            padding: 0.125rem 0.25rem;
            font-size: 14px;
            margin-bottom: 4px;
        }
    }
`

export const Question = () => {
    return (
        <QuestionStyled>
            <SidePanelStyled>
                <QuestionStageStyled>4</QuestionStageStyled>
                <QuestionTruthSign>Incorrect</QuestionTruthSign>
            </SidePanelStyled>
            <QuestionBodyStyled>
                <QuestionTextStyled>
                    <p>The new One World Trade Center in Manhattan New York City was designed by which architect? </p>
                </QuestionTextStyled>
                <AnswersWrapperStyled>
                    <div>
                        <div>Your Answer</div>
                        <p>Fumihiko Maki</p>
                    </div>
                    <div>
                        <div>Correct Answer</div>
                        <p>David Childs</p>
                        {/* <p>he new One World Trade Center in Manhattan The new One World</p> */}
                    </div>
                </AnswersWrapperStyled>
            </QuestionBodyStyled>
        </QuestionStyled>
    )
}