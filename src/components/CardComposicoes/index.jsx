import styled from "styled-components"

const Titulo = styled.h3`
    font-size: 1.5rem;
`

const ImagemResponsiva = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    margin: 20px 0px;
    border-radius: 10px;
`

export default function CardComposicoes( {tituloCard, imagem, onClick} ) {
    return (
        <div>
            <Titulo>{tituloCard}</Titulo>
            <ImagemResponsiva 
                src={imagem} 
                alt="Imagem do Card"
                onClick={onClick}
            />
        </div>

    )
}