import { createContext, Dispatch } from "react"
import { ACTIONTYPES } from "./actions"
import { InitialStateType } from "./reducer"

// dispatch and state contexts
export const DispatchContext = createContext<Dispatch<ACTIONTYPES>>(() => null)
export const StateContext = createContext<InitialStateType | null>(null)