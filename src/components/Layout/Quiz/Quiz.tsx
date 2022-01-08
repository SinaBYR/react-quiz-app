import { useContext, useState } from "react";
import { axios } from "../../../axios/axios";
import { DispatchContext, StateContext } from "../../../store/context";
import { InitialStateType } from "../../../store/reducer";
import { FORMDATA } from "../../../types/types";
import { Results } from "./Results/Results";
import { CATEGORY_IDS } from "./category_ids";
import { Game } from "./Game/Game";
import { Setup } from "./Setup/Setup";

export const Quiz = () => {
    const { questions, currentState, formData } = useContext(StateContext) as InitialStateType
    const dispatch = useContext(DispatchContext)
    const [loading, setLoading] = useState<boolean>(false)

    const startGame = async (config: FORMDATA) => {
        dispatch({ type: 'STORE_ERROR_DATA', payload: null })
        setLoading(true)
        try {
            const url = `?amount=${config.noq}&category=${CATEGORY_IDS[config.category]}&difficulty=${config.level}&type=multiple`
            const response = await axios.get(url)
            const resdata = await response.data

            if(!resdata.results.length) {
                return console.log('Result array is empty.')
            }

            const payload = {
                apiData: resdata.results,
                formData: config
            }
            dispatch({ type: 'STORE_API_DATA', payload})
            dispatch({ type: 'START_GAME' })
            setLoading(false)
        } catch(err) {
            console.log(err)
            dispatch({ type: 'STORE_ERROR_DATA', payload: 'An error occured. Please try again.' })
            setLoading(false)
        }
    }

    const restart = () => {
        const newQuestions = [...questions]
        newQuestions.forEach(question => question.answer = null)
        const payload = {
            questions: newQuestions,
            remainingTime: Number(formData?.time)
        }
        dispatch({ type: 'RESTART_GAME', payload })
    }

    let displayComponent = <Setup start={startGame} loading={loading}/>
    if(currentState === 'in-game') {
        displayComponent = <Game />
    } else if(currentState === 'after-game') {
        displayComponent = <Results restart={restart}/>
    }

    return displayComponent
}