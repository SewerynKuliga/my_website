import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <P>copyright &copy;2021 Seweryn Kuliga</P>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 3.5rem;
    bottom: 0;
    background-color: #fff;
    text-align: center;
    border-top: 1px solid rgb(221,223,226);
    margin-top: 2rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`
const P = styled.p`
    font-size: 2rem;
    padding-top: 0.5rem;
`