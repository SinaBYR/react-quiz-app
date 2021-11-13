import { LayoutStyled } from "./LayoutStyled"
import { Showcase } from "../Showcase/Showcase"
import { Switch, Route } from 'react-router-dom';
import { Footer } from "../Footer/Footer";

const Layout: () => JSX.Element = () => {
    return (
        <LayoutStyled>
            <Switch>
                <Route path="/" component={Showcase}/>
                {/* <Route path="/start" /> */}
            </Switch>
            <Footer />
        </LayoutStyled>
    )
}

export { Layout }