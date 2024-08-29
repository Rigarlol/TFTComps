import styled from "styled-components"

const Button = styled.button`
    padding: ${props => props.$ativo ? '' : '10px 40px;'};
    font-size: ${props => props.$ativo ? '25px' : '18px'};
    font-weight: 700;
    background-color: rgba(255, 6, 6, 0.677);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: ${props => props.$ativo ? '50px' : '30px'};
    transition: .2s;
    width: ${props => props.$ativo ? '60px' : ''};
    height: ${props => props.$ativo ? '60px' : ''};
    margin: ${props => props.$ativo? '0 5px': ''};
    display: flex;
    justify-content: center;
    align-items: center;

    //adicionando o hover
    &:hover {
        box-shadow: 0px 0px 8px rgb(247, 5, 5);
        transform: scale(1.05);
    }

    @media screen and (max-width: 1020px) {
        display: none;
    }
`

export default function Botao({ children, ativo = false }) {
    return (
        <Button $ativo={ativo} type="button">
            {children}
        </Button>
    )
}