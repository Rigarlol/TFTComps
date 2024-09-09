import styled from "styled-components"
import CampoTexto from "../../components/CampoTexto"
import { useState } from "react"
import Botao from "../../components/Botao"


const ContainerLogin = styled.div`
    padding: 80px 4%;
    max-width: 1280px;
    
`

const Formulario = styled.form`
    max-width: 600px;
    margin: 0 auto;
`

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
    display: flex;
    justify-content: center;
    align-items: center;

    //adicionando o hover
    &:hover {
        box-shadow: 0px 0px 8px rgb(247, 5, 5);
        transform: scale(1.05);
    }

    @media screen and (max-width: 1020px) {
    }
`


export default function Login(){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('usuario: ' + usuario);
        console.log('senha: ' + senha);
    }
    
    return (
        <ContainerLogin>
            <Formulario onSubmit={handleSubmit}>
                <CampoTexto 
                    label="Usuário" 
                    type="text"  
                    value={usuario}
                    novoValue={setUsuario}
                />
                <CampoTexto 
                    label="Senha" 
                    type="password"
                    value={senha}
                    novoValue={setSenha}
                />
                <Button type="submit">Entrar</Button>
            </Formulario>
        </ContainerLogin>
    )
}