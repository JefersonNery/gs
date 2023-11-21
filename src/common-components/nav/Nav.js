import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    margin: auto ;
    margin-top:3.7%;
    align-items: center;
    min-height: 1vh;
    max-height:3vh;
    color: white;
    font-weight:bold;
    @media (max-width: 1300px) {
		margin-top:6%;}
    @media (max-width: 768px) {
		margin-top:9%;}
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
    margin-right:6%;
    &:hover{
        color:black;
    }
`;


function Header() {
    return (
        
        <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="#">Contato</NavLink>
            <NavLink href="#"></NavLink>
        </Nav>
    );
}

export default Header;