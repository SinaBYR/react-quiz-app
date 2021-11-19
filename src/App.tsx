import { ReactElement } from "react";
import { Layout } from "./components/Layout/Layout"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const App: () => ReactElement = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    )
}

export default App;