import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 900; 
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const MenuMobileContainer = styled.nav`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: #000000;
    transition: right 0.3s ease;
    z-index: 1000;
    padding: 20px 0px 20px 0px;

`;

const CloseIcon = styled(MdClose)`
    color: white;
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 220px;
`;

const MenuList = styled.ul`
    margin-top: 50px;
    list-style-type: none;
    padding: 0;
    text-align: right;
    

    li {
        margin-bottom: 20px;

        a {
            text-decoration: none;
            color: white;
            font-size: 18px;
            display: block;
            padding: 20px;

            &:hover {
            background-color: rgba(255, 6, 6, 0.677);
            color: black;
            }
        }
    }
`;

export default function MenuMobile({ closeMenu, isOpen }) {
    return (
        <>
            <Overlay isOpen={isOpen} onClick={closeMenu} />
            <MenuMobileContainer isOpen={isOpen}>
                <CloseIcon onClick={closeMenu} />
                <div>
                    <MenuList>
                        <li>
                            <Link to="/" onClick={closeMenu}>Início</Link>
                        </li>
                        <li>
                            <Link to="/Comps" onClick={closeMenu}>Comps</Link>
                        </li>
                        <li>
                            <Link to="/Sobre" onClick={closeMenu}>Sobre</Link>
                        </li>
                        <li>
                            <Link to="/Guias" onClick={closeMenu}>Guias</Link>
                        </li>
                        <li>
                            <Link to="/Contato" onClick={closeMenu}>Contato</Link>
                        </li>
                    </MenuList>
                </div>
            </MenuMobileContainer>
        </>
    );
}