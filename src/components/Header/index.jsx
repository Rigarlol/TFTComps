import Botao from "../Botao";
import Menu from "../Menu";
import Logo from './assets/logo5.png'
import { styled } from 'styled-components';

const ContainerElementos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerHeader = styled.header`
    padding: 40px 4%;
`

export default function Header() {
    return (
        <ContainerHeader>
            <ContainerElementos>
                <div>
                    <img src={Logo} alt="Logo do TFTComps" />
                </div>
                <Menu />
                <Botao>Contato</Botao>
            </ContainerElementos>
        </ContainerHeader>
    )
}