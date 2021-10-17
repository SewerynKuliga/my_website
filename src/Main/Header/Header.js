import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import CVSewerynKuliga from './Files/CVSewerynKuliga.pdf';

function Header() {
    return (
        <Container>
            <Navigation></Navigation>
            <P><b>Seweryn <span style={{ color: "red" }}>Kuliga</span></b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Junior React Developer</P>
            <CV>
                <Button
                    style={{ fontSize: "1.8rem", width: "10rem", color: "blue" }}
                    variant="text"
                    target="_blank"
                    download href={CVSewerynKuliga}
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
    min-width: 320px;
    background-color: rgb(255,255,255);
    box-shadow: 0 0.7rem 1rem rgb(221,223,226);
    border-bottom: 1px solid rgb(221,223,226);
    z-index: 5;
    top: 0;
    text-align: center;
`
const Navigation = styled.div`
    flex: 0.2;
    @media screen and (max-width: 1500px){
        flex: 0.1;
    }
    @media screen and (max-width: 800px){
        flex: 0;
    }
`

const P = styled.div`
    width: 57rem;
    display: block;
    font-size: 3.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    flex: 0.6;

    @media screen and (max-width: 1500px){
        flex: 0.8;
    }
    @media screen and (max-width: 820px){
        flex: 0.8;
        font-size: 2.8rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1.9rem; 
        min-width: 5rem;
    }
`

const CV = styled.div`
    display: block;
    flex: 0.2;
    margin: 0 auto;
    text-align: center;
    
    @media screen and (max-width: 1500px){
        flex: 0.1;
    }
    @media screen and (max-width: 800px){
        flex: 0.2;
        font-size: 1rem;
    }
`


