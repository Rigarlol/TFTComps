import { Link } from "react-router-dom";
import styled from "styled-components";


const LinkEstilizado = styled(Link)`
    color: rgb(99, 99, 99);
    text-decoration: none;
    display: inline-block;
    transition: .2s;

    &:hover {
        color: white;
        transform: scale(1.05);
    }
`

const Nav = styled.nav`
    list-style-type: none;
    
    @media screen and (max-width: 1020px) {
        display: none;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
`

const Li = styled.li`
    list-style-type: none;
    padding: 0 40px;
`

export default function Menu(){
    return (
        <Nav>
            <Ul>
                <Li>
                    <LinkEstilizado to="/">Início</LinkEstilizado>
                </Li>
                <Li>
                    <LinkEstilizado to="/Comps">Comps</LinkEstilizado>
                </Li>
                <Li>
                    <LinkEstilizado to="/Sobre">Sobre</LinkEstilizado>
                </Li>
                <Li>
                    <LinkEstilizado to="/Guias">Guias</LinkEstilizado>
                </Li>
            </Ul>
        </Nav>
    )
}