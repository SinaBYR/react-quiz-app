import { useReducer } from "react"
import { ACTIONTYPE } from './actions'

export interface InitialStateType {
    count: number;
    page: 'setup' | 'game';
}

export const initialState: InitialStateType = {
    count: 0,
    page: 'setup'
}

export function reducer(state = initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'increment': {
            return { ...state, count: state.count + 1 }
        }
        case 'decrement': {
            return { ...state, count: state.count - 1 }
        }
        default: {
            return state
        }
    }
}