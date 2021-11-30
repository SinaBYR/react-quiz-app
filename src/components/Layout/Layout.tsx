import { useState } from "react";
import { LayoutStyled } from "./LayoutStyled"
import { Showcase } from "./Showcase/Showcase"
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer } from "./Footer/Footer";
import { Quiz } from "./Quiz/Quiz";

const Layout = () => {
    const [page, setPage] = useState<'showcase'|'quiz'>('showcase')

    const onClickHandler = () => {
        setPage('quiz')
    }

    return (
        <LayoutStyled>
            {page === 'showcase' ? <Showcase clicked={onClickHandler}/> : <Quiz />}
            <Footer />
        </LayoutStyled>
    )
}

export { Layout }