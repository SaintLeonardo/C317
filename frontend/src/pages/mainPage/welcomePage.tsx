import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/Ativo 37.svg'
import { Button } from '../../components/Button/button'
import { MainContainer, Image, Title, Description, ContentWrapper } from './styles'

export function WelcomePage() {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <ContentWrapper>
                <Image src={logo} alt={'logo elodrinks'} />
                <Title>Bem vindo!</Title>
                <Description>Crie seu orçamento de forma fácil e rápida, por aqui, sem precisar sair de casa!</Description>
            </ContentWrapper>
            <Button onClick={() => navigate('/userdata')}>Iniciar</Button>
        </MainContainer>
    )
}