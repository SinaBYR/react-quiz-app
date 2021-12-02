import { ApiQuestionObject, FORMDATA } from '../types/types'
import { ACTIONTYPES } from './actions'

export interface InitialStateType {
    result: ApiQuestionObject[];
    formData: FORMDATA|null;
    currentState: 'pre-game'|'in-game'|'after-game'
}

export const initialState: InitialStateType = {
    result: [],
    formData: null,
    currentState: 'pre-game'
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

        case 'START_GAME': {
            return {
                ...state,
                currentState: 'in-game'
            }
        }

        case 'FINISH_GAME': {
            return {
                ...state,
                currentState: 'after-game'
            }
        }

        default: {
            return state
        }
    }
}