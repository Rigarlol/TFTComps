import { FaInstagram, FaTwitch } from "react-icons/fa";
import Botao from "../../components/Botao";
import { BsTwitterX } from "react-icons/bs";

import DersoFoto from './assets/derso-foto.png'
import styled from "styled-components";

const SectionSobre = styled.section`
    padding: 80px 4%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 260px;

    @media screen and (max-width: 1020px) {
        flex-direction: column;
        padding: 40px 8%;

        img {
            width: 100%;
        }
    }
    
`
const SobreContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;

    @media screen and (max-width: 1020px) {
        flex-direction: column;
    }
`

const Subtitulo = styled.h2`
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;
    color: white;

    span {
        color: rgba(255, 6, 6, 0.677);
    }
`

const Paragrafo = styled.p`
    margin: 20px 0px;
    text-align: justify;
`

const LinksContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1020px) {
        justify-content: center;
    }
`

export default function Sobre() {
    return (
        <SectionSobre>
            <SobreContainer>
                <div>
                    <img src={DersoFoto} alt="" />
                </div>
                <div>
                    <Subtitulo>MUITO PRAZER, SOU ANDERSON, <span>MAIS CONHECIDO COMO DERSIN2K.</span></Subtitulo>

                    <Paragrafo>Mineiro de coração, aos 29 anos já acumulou uma trajetória impressionante nos eSports. Com passagens memoráveis pelos renomados times CNB E-Sports, BluMartini Gaming e Cream RealBetis no cenário competitivo de Arena of Valor, deixou sua marca como um jogador habilidoso e dedicado.</Paragrafo>

                    <Paragrafo>Hoje, embora tenha deixado para trás os holofotes dos torneios profissionais, mantém seu amor pelos jogos, explorando novas estratégias e desafios como um jogador casual de Teamfight Tactics (TFT).</Paragrafo>
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
                </div>
            </SobreContainer>
        </SectionSobre>
    )
}