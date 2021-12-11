import { ApiQuestionObject, FORMDATA, StageQuestionObject } from '../types/types'
import { ACTIONTYPES } from './actions'

export interface InitialStateType {
    // apiData: the data coming from Open Travia Database api.
    apiData: ApiQuestionObject[];
    formData: FORMDATA|null;
    currentState: 'pre-game'|'in-game'|'after-game';
    questions: StageQuestionObject[];
    remainingGameTime: number|null
}

export const initialState: InitialStateType = {
    apiData: [],
    formData: null,
    currentState: 'pre-game',
    questions: [],
    remainingGameTime: null
}

export function reducer(state = initialState, action: ACTIONTYPES): InitialStateType {
    switch (action.type) {
        case 'STORE_API_DATA': {
            return {
                ...state,
                apiData: action.payload.apiData,
                formData: action.payload.formData
            }
        }

        case 'STORE_RESTRUCTURED_DATA': {
            return {
                ...state,
                questions: action.payload
            }
        }

        case 'UPDATE_CURRENT_QUESTION': {
            return {
                ...state,
                questions: action.payload
            }
        }

        case 'UPDATE_REMAINING_TIME': {
            return {
                ...state,
                remainingGameTime: action.payload
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