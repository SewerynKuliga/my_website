import React from 'react';
import styled from 'styled-components';
import Przechwytywanie from "../../Images/Przechwytywanie.PNG"


function MoneyHeistLP() {
    return (
        <Container>
            <Subtitle>Landing page Money Heist</Subtitle>
            <Description>
                &emsp;Zrobiony w HTML i CSS Landing Page serialu Money Heist - Dom z Papieru. Projekt pojawił się
                w mojej głowie po obejrzeniu 5 sezonu tego serialu.<br /><br />
                Kliknij w link poniżej aby ją zobaczyć:
            </Description>
            <LinkLP 
                href="https://user-images.githubusercontent.com/81814080/137483672-feca3789-27c0-449c-b7a5-f29761b8cc40.png" 
                target="_blank" 
            >
                Landing Page Money Heist
            </LinkLP>
            <Links>Link:&nbsp;
                <Link href="https://github.com/SewerynKuliga/landing_page_Money_Heist" target="_blank">
                    Github - Landing Page Money Heist
                </Link>
            </Links>
        </Container>
    )
}

export default MoneyHeistLP;

const Container = styled.div`
    width: auto;
    margin: 2rem 3rem 0rem 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
        @media screen and (max-width: 820px){
            margin: 1rem 0rem 0rem 0.5rem;
        }
`

const Subtitle = styled.h1`
    font-size: 2.8rem;
    margin: 1rem;
    margin-bottom: 0rem;

    @media screen and (max-width: 820px){
        font-size: 2.0rem;
        margin: 0rem;
        margin-bottom: 1rem;
    }
`

const Description = styled.p`
    font-size: 2rem;
    padding: 2rem;
    line-height: 2.3rem;
    @media screen and (max-width: 820px){
            padding: 1rem;
            font-size: 1.5rem;
        }
`

const Button = styled.a`
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1rem 2rem;
    margin: 1rem 0rem 0rem 2rem;
    background-color: rgb(255, 0, 11);
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 650px){
        font-size: 2rem;
        padding: 0.5rem 0.5rem;
    }
`

const LinkLP = styled.a`
    color: black;
    font-size: 1.8rem;
    margin-left: 5rem;
    &:hover {
        color: red;
    }
    @media screen and (max-width: 820px){
            font-size: 1.5rem;
        }
`

const Links = styled.p`
    font-size: 1.8rem;
    margin-top: 3rem;
    @media screen and (max-width: 820px){
            font-size: 1.5rem;
        }
`

const Link = styled.a`
    color: black;
    &:hover {
        color: red;
    }
    
`