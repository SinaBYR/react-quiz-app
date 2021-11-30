import { useContext, useState } from "react";
import { axios } from "../../../axios/axios";
import { DispatchContext, StateContext } from "../../../store/context";
import { InitialStateType } from "../../../store/reducer";
import { FORMDATA } from "../../../types/types";
import { CATEGORY_IDS } from "./category_ids";
import { Game } from "./Game/Game";
import { Setup } from "./Setup/Setup";

export type Time = '0'|'60'|'120'|'300'

export const Quiz = () => {
    const { isGameFinished } = useContext(StateContext) as InitialStateType
    const dispatch = useContext(DispatchContext)
    const [page, setPage] = useState<'setup' | 'game'>('setup')
    const [loading, setLoading] = useState<boolean>(false)

    const changePageHandler = () => {
        if(page === 'setup') {
            return setPage('game')
        }

        setPage('setup')
    }

    const startGame = async (config: FORMDATA) => {
        setLoading(true)
        try {
            const url = `?amount=${config.noq}&category=${CATEGORY_IDS[config.category]}&difficulty=${config.level}&type=multiple`
            const response = await axios.get(url)
            const resdata = await response.data

            if(!resdata.results.length) {
                return console.log('Result array is empty.')
            }

            const payload = {
                result: resdata.results,
                formData: config
            }
            dispatch({ type: 'store_data', payload})
            changePageHandler()
            setLoading(false)
        } catch(err) {
            console.log(err)
            setLoading(false)
        }
    }
    console.log(isGameFinished)

    return page === 'setup' ? <Setup start={startGame} loading={loading}/> : (isGameFinished ? <p>FINISHED</p> : <Game />)
}