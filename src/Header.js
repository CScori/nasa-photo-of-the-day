import React from 'react';
import Logo from '../public/Logo.png';
import styled from 'styled-components';

const Head = styled.div`
    height: 200px;
    margin-bottom: 50px;
    background: black;
    color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
width: 200px;
height: 200px;
object-fit: scale;
flex-shrink: 2;
`;


const Header = () => {
    return (
        <Head>
            <Logo src='Logo' alt='Nasa Logo'/>
            <h2>Nasa Daily Photo</h2>
        </Head>
    )
}

export default Header
