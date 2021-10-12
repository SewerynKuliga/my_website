import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Seweryn_Kuliga_CV from './Files/Seweryn_Kuliga_CV.pdf'

function Header() {
    return (
        <Container>
            <Navigation></Navigation>
            <P>Seweryn Kuliga &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Junior React Developer</P>
            <CV>
                <Button 
                style={{ fontSize: "1.8rem", width: "10rem", color: "blue" }} 
                variant="text" 
                target="_blank" 
                download href={Seweryn_Kuliga_CV}
                >CV</Button>
            </CV>

        </Container>
    )
}

export default Header;

const Container = styled.div`
    position: fixed;
    display: flex;
    height: 4.5rem;
    width: 100%;
    background-color: rgb(255,255,255);
    box-shadow: 0 0.7rem 1rem rgb(221,223,226);
    border-bottom: 1px solid rgb(221,223,226);
    z-index: 5;
    top: 0;
    text-align: center;
`

const P = styled.p`
    width: 57rem;
    display: block;
    font-size: 3.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    flex: 0.6;
`

const CV = styled.a`
    display: block;
    flex: 0.2;
    margin: 0 auto;
    text-align: center;
`
const Navigation = styled.div`
    flex: 0.2;
`
