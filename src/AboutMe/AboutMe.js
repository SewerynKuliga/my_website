import React from 'react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Container>
            <img alt="Zdjęcie Seweryn Kuliga" />
            <Header>O Mnie:</Header>
            <Span>
                Mam na imię Seweryn, mam 23 lata.
                Od lutego 2021 roku intensywnie uczę się programować w JavaScript oraz React.
                Tworzę swoje małe projekty oraz pomagam moim znajomym w rozwijaniu swoich firm
                albo zainteresowań tworząc dla nich strony internetowe.
                Programowanie jest dla mnie czymś więcej niż ciekawym zajęciem - jest to moja ucieczka od rzeczywistości
                do świata kolorowego kodu w Visual Studio Code oraz bycia dumnym z moich prac.
                Stanowisko Junior React Developera przyjął bym w tym momencie najchętniej, ponieważ zdaję
                sobie sprawę, że dużo nauki przede mną, ale solidne podstawy mam już wyuczone poprzez pobyt na stażu
                jako Junior Frontend Developer, gdzie głównym narzędziem używanym przez nasz zespół był React oraz TypeScript.
                <br />
                Strona ta jest swego rodzaju wizytówką oraz moją motywacją
                do dalszej pracy nad swoimi umijętnościami programisty. Robię wszytko, aby dotrzeć do szerszego grona odbiorców
                co pozwoli mi rozwinąć skrzydła. Staram się rozwijać, być na bieżąco z wszelkimi nowinkami technologicznymi 
                śledząc kanały programistów JS-a na Youtube. Każdą wolną chwilę spędzam na udoskonalaniu siebie, oraz moich projektów.
                <br />
                Moja przygoda z programowaniem zaczęła się początkiem 2021 roku po wizycie u znajomych programistów na planszówkach. 
                Już po pierwszych kursach z HTMLa i CSSa całkowicie popadłem w fascynację tworzenia stron internetowych i aplikacji webowych.
                Strona ta jest jednym z projektów, nad którym spędziłem sporo czasu i jest ona moją wizytówką oraz 
                projektem, który ma pokazać moje umiejętności Frontendowe.
                
                
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Span>

        </Container>
    )
}

export default AboutMe;

const Container = styled.div`
    position: relative;
    display: block;
    width: auto;
    height: auto;
    margin-top: 5rem;
    background-color: #fff;
    margin-left: 10%;
    margin-right: 10%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 3rem;
`
const Header = styled.h1`
    font-size: 4rem;
`

const Span = styled.span`
    font-size: 2rem;
`