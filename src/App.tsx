import { createContext, Dispatch, ReactElement, useReducer } from "react";
import { Layout } from "./components/Layout/Layout"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { initialState, InitialStateType, reducer } from "./store/reducer";
import { ACTIONTYPE } from "./store/actions";

// dispatch and state contexts
const DispatchContext = createContext<Dispatch<ACTIONTYPE> | null>(null)
const StateContext = createContext<InitialStateType | null>(null)

const App: () => ReactElement = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <ThemeProvider theme={theme}>
                    <Layout />
                </ThemeProvider>
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export default App;