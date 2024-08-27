import FotoDerso from './assets/derso.png';
import Botao from "../../components/Botao";
import styled from 'styled-components';


const SectionTopoDoSite = styled.section`
    padding: 80px 4%;
    max-width: 1280px;
    margin: 0 auto;
`

const ContainerTopoDoSite = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 90px;
`

const Titulo = styled.h1`
    color: white;
    font-size: 40px;
    line-height: 45px;
`

const Span = styled.span`
    color: rgba(255, 6, 6, 0.677);
`

const Paragrafo = styled.p`
    color: white;
    margin: 40px 0;
`

const Imagem = styled.img`
    position: relative;
    animation: flutuar 2s ease-in-out infinite alternate;

    @keyframes flutuar {
    0% {
        top: 0;
    }
    100% {
        top: 30px;
    }
}
    
`

export default function Home() {
    return (
        <main>
            <SectionTopoDoSite>
                <ContainerTopoDoSite>
                    <div>
                        <Titulo>APRENDA A UTILIZAR AS MELHORES COMPOSIÇÕES DO META<Span>.</Span></Titulo>
                        <Paragrafo>O TFT devido a sua complexidade e rápida mudança de composições ao decorrer da semana pode se tornar um pouco dificil de acompanhar, devido a isso, estou disponibilizando algumas composições do meta.</Paragrafo>
                        <Botao>Saiba Mais</Botao>
                    </div>
                    <div>
                        <Imagem src={FotoDerso} alt="Foto de Derso" />
                    </div>
                </ContainerTopoDoSite>
            </SectionTopoDoSite>

            <section>
                <div>
                    <h2></h2>
                    <div></div>
                </div>
            </section>
        </main>
    )
}