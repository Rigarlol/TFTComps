import styled from "styled-components"

const ContainerCard = styled.div`
    color: white;
    padding: 40px;
    margin: 45px 0px;
    border-radius: 20px;
    transition: .2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.333);
    }
`
const Icone = styled.div`
    font-size: 70px;
`

const Titulo = styled.h3`
    font-size: 28px;
    margin: 15px 0;
`



export default function CardEspecialidades({ icon, titulo, texto }) {

    return (
        <ContainerCard>
            <Icone>
                {icon}
            </Icone>
            <Titulo>{titulo}</Titulo>
            <p>{texto}</p>
        </ContainerCard>
    )
}