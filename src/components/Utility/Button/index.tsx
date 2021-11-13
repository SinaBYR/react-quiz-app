import styled from "styled-components";

interface StyledButtonProps {
    kind: 'primary' | 'secondary' | 'warning';
}

type Kind ='primary' | 'secondary' | 'warning'; 

const ButtonStyled = styled.button<{ kind: Kind}>`
    background-color: ${({ kind }) => {
        if(kind === 'primary') {
            return '#eeeeee'
        } else if(kind === 'secondary') {
            return '#3DB2FF'
        } else if(kind === 'warning') {
            return '#FF2442'
        }
    }};
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    display: block;
    border-radius: 4px;
    box-shadow: 0 0 4px #2c2c2c;

    &:active {
        transform: scale(0.98);
    }
`

export const Button: React.FC<{ type: Kind, children: string }> = ({ type, children}) => {
    return <ButtonStyled kind={type}>{children}</ButtonStyled>
}