import styled from "styled-components";

type Kind ='primary' | 'secondary' | 'warning' | 'success'; 

const ButtonStyled = styled.button<{ kind: Kind}>`
    background-color: ${({ kind }) => {
        switch(kind) {
            case 'primary': return '#eeeeee'
            case 'secondary': return '#544179'
            case 'success': return '#146310'
            case 'warning': return '#FF2442'
        }
    }};
    color: ${({ kind }) => {
        if(kind === 'primary') {
            return '#080808'
        }

        return '#FFFFFF'
    }};
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    display: block;
    border-radius: 4px;

    &:active {
        transform: scale(0.98);
    }
`

export const Button: React.FC<{ type: Kind, children: string }> = ({ type, children}) => {
    return <ButtonStyled kind={type}>{children}</ButtonStyled>
}

// return '#8a0b46'
// return '#00A19D'
// return '#FF5F7E'
// return '#EEEEEE'
// return '#3DB2FF'
// return '#FFBF86'
// return '#49FF00'
// return '#911F27'
// return '#C6D57E'
// return '#2FDD92'