import { LayoutStyled } from "./LayoutStyled"
import { Showcase } from "../Showcase/Showcase"
import { Route } from 'react-router-dom';
import { Footer } from "../Footer/Footer";
import { CSSTransition } from "react-transition-group";

const Layout: () => JSX.Element = () => {
    return (
        <LayoutStyled>
                {/* <Route path="/" component={Showcase}/> */}
                {/* <Route path="/start" /> */}
                <Route exact path="/">
                    {({ match }) => (
                        <CSSTransition
                            in={match !== null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <Showcase />
                        </CSSTransition>
                    )}
                </Route>
                <Route path="/start">
                    {({ match }) => (
                        <CSSTransition in={match !== null} timeout={300} classNames="page" unmountOnExit>
                            <Showcase />
                        </CSSTransition>
                    )}
                </Route>
            <Footer />
        </LayoutStyled>
    )
}

export { Layout }