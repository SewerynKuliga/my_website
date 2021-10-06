import React from 'react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Container>
            <img alt="Zdjęcie Seweryn Kuliga" />
            <Header>O Mnie:</Header>
            <P>
                Mam na imię Seweryn, mam 23 lata.
                Od pół roku intensywnie uczę się programować w JavaScript oraz React.
                Tworzę swoje małe projekty oraz pomagam moim znajomym w rozwijaniu swoich firm
                albo zainteresowań tworząc dla nich strony internetowe.
                Programowanie jest dla mnie czymś więcej niż ciekawym zajęciem - jest to moja ucieczka od rzeczywistości
                do świata kolorowego kodu w Visual Studio Code oraz bycia dumnym z moich prac.
                Stanowisko Junior React Developera przyjął bym w tym momencie najchętniej, ponieważ zdaję
                sobie sprawę, że dużo nauki przede mną, ale solidne podstawy mam już wyuczone poprzez pobyt na stażu 
                jak Junior Frontend Developer, gdzie głównym narzędziem był React.
            </P>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </Container>
    )
}

export default AboutMe;

const Container = styled.div`
    position: absolute;
    display: block;
    width: auto;
    height: auto;
    margin-top: 5rem;
    background-color: #fff;
    margin-left: 10%;
    margin-right: 10%;
`
const Header = styled.h1`
    font-size: 4rem;
`

const P = styled.p`
    font-size: 2rem;
`