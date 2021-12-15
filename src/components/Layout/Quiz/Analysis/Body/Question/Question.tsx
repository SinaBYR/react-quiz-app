import styled from "styled-components"

const QuestionStyled = styled.div`
    display: flex;
    color: white;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 1rem;
    margin-top: 1rem;
    gap: 1rem;
    border-radius: 4px;

`

const QuestionStageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    width: 100px;
    max-width: 100px;
    height: 100px;
    height: 75px;
    background-color: #334149;
    background-color: #303a41;
    border-radius: 4px;
    margin-bottom: 8px;
    /* border: 1px solid red; */
`

const QuestionBodyStyled = styled.div`
    width: 70%;
    width: 100%;
    line-height: 1.4;


    & > *:first-child {
        /* margin-bottom: 16px; */
    }
`

const QuestionTextStyled = styled.div`
    /* text-align: justify; */
    width: 100%;
    /* background-color: red; */
`

const AnswersWrapperStyled = styled.div`
    display: flex;
    gap: 2rem;
    /* border: 1px solid yellow; */
    /* text-align: justify; */
    font-size: 14px;

    & > * {
        /* display: flex; */
        /* border: 1px solid red; */
        /* background-color: ${({theme}) => theme.colors.primary}; */
        /* padding: 8px;
        box-shadow: 2px 2px 2px 2px #303a41;
        border-radius: 4px; */
        margin-top: 12px;
        /* margin-bottom: 16px; */

        & > div {
            display: inline-block;
            padding: 0.125rem 0.25rem;
            /* color: #b3b3b3; */
            background-color: gray;
            /* background-color: #303a41; */
            /* width: 100px; */
            font-size: 12px;
            font-size: 14px;
            margin-bottom: 4px;
        }

        & > p {
            /* background-color: red; */
            width: 250px;
            width: 290px;
        }
    }
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
export const Question = () => {
    return (
        <QuestionStyled>
            <div>
                <QuestionStageStyled>4</QuestionStageStyled>
                <QuestionTruthSign>Incorrect</QuestionTruthSign>
            </div>
            <QuestionBodyStyled>
                <QuestionTextStyled>
                    <p>The new One World Trade Center in Manhattan New York City was designed by which architect? </p>
                </QuestionTextStyled>
                <AnswersWrapperStyled>
                    <div>
                        <div>Your Answer</div>
                        <p>Fumihiko Maki The new One World Trade Center in Manhattan New York City was designed</p>
                    </div>
                    <div>
                        <div>Correct Answer</div>
                        <p>David Childs</p>
                        <p>he new One World Trade Center in Manhattan The new One World</p>
                    </div>
                </AnswersWrapperStyled>
            </QuestionBodyStyled>
        </QuestionStyled>
    )
}