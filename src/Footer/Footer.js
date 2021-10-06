import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <p>copyright &copy;2021 Seweryn Kuliga</p>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: block;
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-top: 5rem;
`
