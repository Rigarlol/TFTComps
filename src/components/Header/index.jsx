import { useState } from "react";
import Botao from "../Botao";
import Menu from "../Menu";
import Logo from './assets/logo5.png'
import { styled } from 'styled-components';
import MenuMobile from "../MenuMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const ContainerElementos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerHeader = styled.header`
    padding: 40px 4%;
`

const IconeAbrirMenuMobile = styled(RxHamburgerMenu)`
    display: none;
    font-size: 30px;

    @media screen and (max-width: 1020px) {
        display: block;
    }
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    
`

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function abrirMenu() {
        setIsMenuOpen(true);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <ContainerHeader>
            <ContainerElementos>
                <div>
                    <img src={Logo} alt="Logo do TFTComps" />
                </div>
                <Menu />

                {!isMenuOpen && (
                    <IconeAbrirMenuMobile onClick={abrirMenu} />
                )}

                {isMenuOpen && (
                    <MenuMobile 
                        closeMenu={closeMenu}
                        isOpen={abrirMenu}     
                    />
                )}
                
                {/*tirar o link arruma o espaçamento do icone de navegação mobile */}

                <LinkEstilizado to={'/login'}>
                    <Botao>Login</Botao>
                </LinkEstilizado>
            </ContainerElementos>
        </ContainerHeader>
    );
}