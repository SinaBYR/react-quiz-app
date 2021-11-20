import { LayoutStyled } from "./LayoutStyled"
import { Showcase } from "./Showcase/Showcase"
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer } from "./Footer/Footer";
import { Quiz } from "./Quiz/Quiz";

const Layout: () => JSX.Element = () => {
    return (
        <LayoutStyled>
            <Switch>
                <Route path="/quiz" component={Quiz}/>
                <Route path="/" component={Showcase}/>
                <Redirect to="/quiz"/>
            </Switch>
            <Footer />
        </LayoutStyled>
    )
}

export { Layout }