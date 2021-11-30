import { ApiQuestionObject, FORMDATA } from '../types/types'
import { ACTIONTYPES } from './actions'

export interface InitialStateType {
    result: ApiQuestionObject[];
    formData: FORMDATA|null;
    isGameFinished: boolean
}

export const initialState: InitialStateType = {
    result: [],
    formData: null,
    isGameFinished: false
}

export function reducer(state = initialState, action: ACTIONTYPES): InitialStateType {
    switch (action.type) {
        case 'store_data': {
            return {
                ...state,
                result: action.payload.result,
                formData: action.payload.formData
            }
        }

        case 'GAME_FINISHED': {
            return {
                ...state,
                isGameFinished: true
            }
        }
        default: {
            return state
        }
    }
}