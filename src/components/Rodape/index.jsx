import styled from "styled-components"
import Logo from './assets/logo2.png'

import { FaEnvelope, FaInstagram, FaTwitch } from "react-icons/fa"
import Botao from './../Botao/index';
import { BsTwitterX } from "react-icons/bs";

const LogoContainer = styled.div`

    @media screen and (max-width: 1020px) {
        margin: 0 auto;
    }
`

const Footer = styled.footer`
    padding: 10px 19%;
    box-shadow: 0 0 40px 10px #ffffff10;
    display: flex;
    flex-direction: column;
`

const LineFooter = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LineFooterBorda = styled.div`
    border-top: 2px solid rgba(255, 6, 6, 0.677);
`

const EmailContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;

    p {
    color: rgba(255, 6, 6, 0.677);
    line-height: 1.8;
    padding-top: 10px;
    }

    @media screen and (max-width: 1020px) {
        margin-left: 20px;
    }
`

const Envelope = styled(FaEnvelope)`
    font-size: 1.5em; 
`

const LinksContainer = styled.div`
    display: flex;
    gap: 5px;

    @media screen and (max-width: 1020px) {
        display: none;
    }
`

export default function Rodape() {
    return (
        <Footer>
            <LineFooter>
                <LogoContainer>
                    <img src={Logo} alt="" />
                </LogoContainer>
                <LinksContainer>
                    <a href="https://www.twitch.tv/dersin2k" target="_blank">
                        <Botao ativo={true}>
                            <FaTwitch />
                        </Botao>
                    </a>
                    <a href="https://x.com/dersin2k" target="_blank">
                        <Botao ativo={true}>
                            <BsTwitterX />
                        </Botao>
                    </a>
                    <a href="https://www.instagram.com/dersin2k/" target="_blank">
                        <Botao ativo={true}>
                            <FaInstagram />
                        </Botao>
                    </a>   
                </LinksContainer>
            </LineFooter>
            <LineFooterBorda>
                <EmailContainer>
                    <Envelope />
                    <p>dersin@snackclub.gg</p>
                </EmailContainer>
            </LineFooterBorda>
        </Footer>
    )
}