import { LayoutStyled } from "./LayoutStyled"
import { Showcase } from "../Showcase/Showcase"
import { Switch, Route } from 'react-router-dom';

const Layout = () => {
    return (
        <LayoutStyled>
            <Switch>
                <Route path="/" component={Showcase}/>
                <Route path="/start" />
            </Switch>
            
        </LayoutStyled>
    )
}

export { Layout }