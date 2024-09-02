import styled from "styled-components"
import Ahri from './assets/ahri-teste1.png'
import Blitz from './assets/blitz-sentinela.png'
import CardComposicoes from "../../components/CardComposicoes"


const CompsSection = styled.section`
    padding: 80px 4%;
    max-width: 1280px;
`

const Titulo = styled.h1`
    text-align: center;
    font-size: 40px;

    span {
        color: rgba(255, 6, 6, 0.677);
    }
`

const SubTitulo = styled.h2`
    font-size: 30px;
`

const H3 = styled.h2`
    font-size: 27px;
`

const Container = styled.div`
    margin: 50px 0px;
`



export default function Comps() {

    const dados = [
        {   
            id: 1,
            tituloCard: 'Ahri KDA',
            imagem: './assets/ez-bigshot.png'
        },
        {
            id: 2,
            tituloCard: 'Blitz',
            imagem: {Blitz}
        }
    ]

    return (
        <CompsSection>
            <div>
                <Titulo>AS MELHORES <span>COMPOSIÇÕES DO META.</span></Titulo>
            </div>
            <Container>
                <SubTitulo>Composições Principais</SubTitulo>
                <H3>Top Tier</H3>
            </Container>
            <div>
                {dados.map(dado => {
                    <CardComposicoes  />
                })}
            </div>
        </CompsSection>
    )
}