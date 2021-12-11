import styled from 'styled-components'
import { useState } from "react"
import { Showcase } from "./Showcase/Showcase"
import { Footer } from "./Footer/Footer"
import { Quiz } from "./Quiz/Quiz"

const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};

    & > *:first-child {
        margin-top: auto;
    }

    & > *:last-child {
        margin-top: auto;
    }
`

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