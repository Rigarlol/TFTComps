import React, { useState } from "react";
import styled, { css } from "styled-components";
import Ahri from './assets/ahri-teste1.png';
import Blitz from './assets/blitz-sentinela.png';
import CompAhri from './assets/comp-ahri-kda.png';
import CardComposicoes from "../../components/CardComposicoes";

const CompsSection = styled.section`
    padding: 80px 4%;
    max-width: 1280px;
`;

const Titulo = styled.h1`
    text-align: center;
    font-size: 40px;

    span {
        color: rgba(255, 6, 6, 0.677);
    }
`;

const SubTitulo = styled.h2`
    font-size: 30px;
`;

const H3 = styled.h2`
    font-size: 27px;
`;

const Container = styled.div`
    margin: 50px 0px;
`;

const ComposicaoContainer = styled.div`
    padding: 20px 8%;
`;

const InfoContainer = styled.div`
    margin-top: 10px;
    background-color: #222;
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
    transition: max-height 0.5s ease-out, opacity 0.5s ease-out, padding 0.5s ease-out;

    /* Estilos quando fechado */
    max-height: 0;
    opacity: 0;
    padding: 0 20px;

    /* Estilos quando aberto */
    ${({ isOpen }) =>
        isOpen &&
        css`
            max-height: 800px; /* Ajuste conforme o conteúdo */
            opacity: 1;
            padding: 20px;
        `}
    
    img {
        width: 100%;
        border-radius: 10px
    }

    p {
        margin: 10px 0px;
    }
`;

export default function Comps() {
    const [selectedComposicao, setSelectedComposicao] = useState(null);

    const dados = [
        {   
            id: 1,
            tituloCard: 'Ahri KDA',
            imagem: Ahri,
            imagemComp: CompAhri,
            descricao: {
                quandoJogar: 'Ahri itens: (Blue, Nashors, Gunblade)',
                comoJogar: 'Tente fazer 50 de economia o mais rápido possível e, após isso, faça economia até o nível 8. Você vai querer estar no nível 8 no estágio 4.2. Após isso, rolete e tente achar Ahri ou Blitz Headliner.',
                itens: 'Ahri: Blue, Nashors, Gunblade, Blitz/Ekko: itens de tank,'
            }
        },
        {
            id: 2,
            tituloCard: 'Blitz',
            imagem: Blitz,
            imagemComp: CompAhri,
            descricao: {
                quandoJogar: 'Blitz itens: (Warmog, Bramble, Dragon\'s Claw)',
                comoJogar: 'Mantenha sua economia alta enquanto monta sua frontline com Blitz. Role para 3 estrelas e complete os itens de tanque. Vá para o nível 8 e finalize sua comp com uma backline forte.',
                itens: 'Blitz: Warmog, Bramble, Dragon\'s Claw, Ekko: itens de suporte,'
            }
        }
    ];

    const handleCardClick = (dado) => {
        if (selectedComposicao && selectedComposicao.id === dado.id) {
            setSelectedComposicao(null);
        } else {
            setSelectedComposicao(dado);
        }
    };

    return (
        <CompsSection>
            <div>
                <Titulo>AS MELHORES <span>COMPOSIÇÕES DO META.</span></Titulo>
            </div>
            <Container>
                <SubTitulo>Composições Principais</SubTitulo>
                <H3>Top Tier</H3>
            </Container>
            
            <ComposicaoContainer>
                {dados.map(dado => (
                    <div key={dado.id}>
                        <CardComposicoes 
                            tituloCard={dado.tituloCard} 
                            imagem={dado.imagem} 
                            onClick={() => handleCardClick(dado)}
                        />
                        <InfoContainer isOpen={selectedComposicao && selectedComposicao.id === dado.id}>
                            <h2>{dado.tituloCard}</h2>
                            <img src={dado.imagemComp} alt={`Composição de ${dado.tituloCard}`} />
                            <h3>Quando jogar:</h3>
                            <p>{dado.descricao.quandoJogar}</p>
                            <h3>Como jogar:</h3>
                            <p>{dado.descricao.comoJogar}</p>
                            <h3>Itens:</h3>
                            <p>{dado.descricao.itens}</p>
                        </InfoContainer>
                    </div>
                ))}
            </ComposicaoContainer>
        </CompsSection>
    );
}
