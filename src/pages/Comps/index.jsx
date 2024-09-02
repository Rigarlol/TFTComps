import styled from "styled-components"



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
                
            </div>
        </CompsSection>
    )
}