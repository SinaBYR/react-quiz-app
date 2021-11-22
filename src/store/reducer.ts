import { Result } from '../types/types'
import { ACTIONTYPES } from './actions'

export interface InitialStateType {
    count: number;
    page: 'setup' | 'game';
    data: Result[];
}

export const initialState: InitialStateType = {
    count: 0,
    page: 'setup',
    data: []
}

export function reducer(state = initialState, action: ACTIONTYPES): InitialStateType {
    switch (action.type) {
        case 'store_data': {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state
        }
    }
}