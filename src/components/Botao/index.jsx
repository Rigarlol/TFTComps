import styled from "styled-components"


const Button = styled.button`
    padding: 10px 40px;
    font-size: 18px;
    font-weight: 700;
    background-color: rgba(255, 6, 6, 0.677);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    transition: .2s;

    //adicionando o hover
    &:hover {
        box-shadow: 0px 0px 8px rgb(247, 5, 5);
        transform: scale(1.05);
    }
`

export default function Botao({ children }) {
    return (
        <Button type="button">{children}</Button>
    )
}