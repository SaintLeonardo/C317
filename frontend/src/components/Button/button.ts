import { styled } from "../../styles/defaultTheme";

export const Button = styled('button', {
    all: 'unset',
    backgroundColor: '$pantone2021C',
    borderRadius: '8px',
    padding: '0.5rem',
    width: '40%',
    fontSize: '20px',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    
    '&:hover': {
        backgroundColor: '#934B21'
    }
})