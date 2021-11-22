import { useContext, useState } from "react";
import { axios } from "../../../axios/axios";
import { DispatchContext } from "../../../store/context";
import { FORMDATA, Result } from "../../../types/types";
import { CATEGORY_IDS } from "./category_ids";
import { Game } from "./Game/Game";
import { Setup } from "./Setup/Setup";

export const Quiz = () => {
    const [page, setPage] = useState<'setup' | 'game'>('setup');
    // const [data, setData] = useState<Result[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useContext(DispatchContext)

    const changePageHandler = () => {
        if(page === 'setup') {
            return setPage('game')
        }

        setPage('setup')
    }

    const startGame = async (config: FORMDATA) => {
        setLoading(true)
        console.log(config)
        try {
            const url = `?amount=${config.noq}&category=${CATEGORY_IDS[config.category]}&difficulty=${config.difficulty}&type=multiple`
            const response = await axios.get(url)
            const resdata = await response.data

            if(!resdata.results.length) {
                return
            }

            // setData(resdata.results)
            // console.log(url)
            dispatch({ type: 'store_data', payload: resdata.results})
            // console.log(resdata)
            changePageHandler()
            setLoading(false)
        } catch(err) {
            console.log(err)
            setLoading(false)
        }
    }

    return page === 'setup' ? <Setup start={startGame} loading={loading}/> : <Game />
}