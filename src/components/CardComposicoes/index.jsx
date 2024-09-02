

export default function CardComposicoes( {tituloCard, imagem} ) {
    return (
        <div>
            <p>{tituloCard}</p>
            <img src={imagem} alt="Imagem do Card"/>
        </div>

    )
}