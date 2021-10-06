import React from 'react';
import styled from 'styled-components';
import "./Header.css";

function Header() {
    return (
        <Container>
            <P>Seweryn Kuliga Junior React Developer</P>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    position: fixed;
    display: block;
    height: 4.5rem;
    width: 100%;
    background-color: rgb(255,255,255);
    border-bottom: 1px solid rgb(221,223,226);
    z-index: 5;
    top: 0;
`

const P = styled.p`
    width: 57rem;
    display: block;
    font-size: 3.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
`