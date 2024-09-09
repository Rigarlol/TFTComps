import styled from "styled-components"


const InputEstilizado = styled.input`
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    margin-top: .5em;
    margin-bottom: .5em;
    color: black;
    
    
    //adicionando naofocus
    &:not(:focus) {
        background-color: #888888;
    }

    &:not(:focus)::placeholder {
        color: #01080E;
    }
`

export default function CampoTexto({ type, label, name, novoValue, value }) {
    return (
        <div>
            <label>{label}</label>
            <InputEstilizado
                type={type}
                name={name}
                required
                value={value}
                onChange={(event) => novoValue(event.target.value)}
            />
        </div>
    )
}