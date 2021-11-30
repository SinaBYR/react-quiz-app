import { ReactElement, useReducer } from "react";
import { Layout } from "./components/Layout/Layout"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { initialState, reducer } from "./store/reducer";
import { DispatchContext, StateContext } from "./store/context";

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