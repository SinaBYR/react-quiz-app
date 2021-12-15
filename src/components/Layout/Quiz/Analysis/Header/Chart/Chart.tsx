import styled from "styled-components"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useContext } from "react"
import { StateContext } from "../../../../../../store/context"
import { InitialStateType } from "../../../../../../store/reducer"

ChartJS.register(ArcElement, Tooltip, Legend)

const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    /* width: 400px; */
    height: 190px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #EEEEEE;
    padding: 1rem;
    /* border: 1px solid gray; */
    border-radius: 4px;
`

const ChartWrapperStyled = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 16px;
`
const LegendStyled = styled.div`
    align-self: center;
    
    & > div {
        width: 130px;
        /* border: 1px solid red; */
    }

    & > div > span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 4px;
    }

    & > div:first-child > span {
        background-color: green;
    }

    & > div:nth-child(2) > span {
        background-color: red;
    }

    & > div:last-child > span {
        background-color: gray;
    }
`

export const Chart = () => {
    const { questions } = useContext(StateContext) as InitialStateType
    const data = [questions.filter(q => q.isCorrect).length, questions.filter(q => q.isCorrect === false).length, questions.filter(q => q.isCorrect === null).length]
    const chartData: ChartData<"doughnut"> = {
        labels: ['Correct', 'Wrong', 'Not Answered'],
        datasets: [
            {
                label: 'Answers',
                data: data,
                backgroundColor: [
                    'green',
                    'red',
                    'gray'
                ],
            }
        ] 
    }
    const ChartOptions: ChartOptions<"doughnut"> = {
        plugins: {
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rect',
                    font: {
                        family: 'Mukta, sans-serif'
                    },
                    padding: 4,
                },
                position: 'left',
                align: 'end',
            }
        }
    }

    return (
        <ContainerStyled>
            <ChartWrapperStyled>
                <Doughnut data={chartData} options={ChartOptions}/>
            </ChartWrapperStyled>
            <LegendStyled>
                <div>
                    <span></span>
                    Correct
                </div>
                <div>
                    <span></span>
                    Wrong
                </div>
                <div>
                    <span></span>
                    Not Answered
                </div>
            </LegendStyled>
        </ContainerStyled>
    )
}