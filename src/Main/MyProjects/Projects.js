import React from 'react';
import styled from 'styled-components';
import MoneyHeistLP from './MoneyHeistLandingPage/MoneyHeistLP';

function Projects() {
    return (
        <Container>
            <Header>Wybrane projekty<span style={{ color: "red" }}><b>:</b> </span></Header>
            <MoneyHeistLP />
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    position: relative;
    width: auto;
    height: auto;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
    line-height: 2rem;
    @media screen and (max-width: 1200px){
        display: block;
        text-align: justify;
    }
    @media screen and (max-width: 820px){
        padding: 2rem;
        margin-left: 4%;
        margin-right: 2%;
    }
    @media screen and (max-width: 650px){
        padding: 2rem;
    }
`

const Header = styled.h1`
    font-size: 3.5rem;
    @media screen and (max-width: 820px){
        font-size: 2.8rem;
    }
    @media screen and (max-width: 650px){
        font-size: 2.5rem;
    }
`
