import React from 'react';
import styled from 'styled-components';


function AboutMe() {
    return (
        <Container>
            <Text>
                <Header><span style={{ color: "red" }}>O Mnie</span>:</Header>
                <Span>
                    &emsp;Mam na imię Seweryn, mam 23 lata. <br />
                    Od lutego 2021 roku intensywnie uczę się programować w JavaScript oraz React.
                    Tworzę swoje małe projekty oraz pomagam moim znajomym w rozwijaniu swoich firm
                    albo zainteresowań tworząc dla nich strony internetowe.
                    <br />
                    &emsp;Moja przygoda z programowaniem zaczęła się początkiem 2021 roku po wizycie u znajomych programistów na planszówkach.
                    Już po pierwszych kursach z HTMLa i CSSa całkowicie popadłem w fascynację tworzenia stron internetowych i aplikacji webowych.
                    Strona ta jest jednym z projektów, nad którym spędziłem sporo czasu i jest ona moją wizytówką oraz
                    projektem, który ma pokazać moje umiejętności Frontendowe.
                    <br />
                    &emsp;Programowanie jest dla mnie czymś więcej niż ciekawym zajęciem - jest to moja ucieczka od rzeczywistości
                    do świata kolorowego kodu w Visual Studio Code oraz bycia dumnym z moich prac.
                    Stanowisko Junior React Developera przyjął bym w tym momencie najchętniej, ponieważ zdaję
                    sobie sprawę, że dużo nauki przede mną, ale solidne podstawy mam już wyuczone poprzez pobyt na stażu
                    jako Junior Frontend Developer, gdzie głównym narzędziem używanym przez nasz zespół był React oraz TypeScript.
                    <br />
                    &emsp;Strona ta jest swego rodzaju wizytówką oraz moją motywacją
                    do dalszej pracy nad swoimi umiejętnościami programisty. Robię wszytko, aby dotrzeć do szerszego grona odbiorców
                    co pozwoli mi rozwinąć skrzydła. Staram się rozwijać, być na bieżąco z wszelkimi nowinkami technologicznymi
                    śledząc kanały programistów JS-a i Reacta na Youtube. Każdą wolną chwilę spędzam na udoskonalaniu siebie, oraz moich projektów.

                </Span>
            </Text>
            <ImgBox>
                <Img  alt="Zdjęcie Seweryn Kuliga" />
            </ImgBox>

        </Container>
    )
}

export default AboutMe;

const Container = styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: auto;
    margin-top: 5.5rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
    text-align: center;
    line-height: 2rem;

    @media screen and (max-width: 820px){
        display: block;
        text-align: justify;
        padding: 2rem;
        margin-left: 4%;
        margin-right: 2%;
    }
    @media screen and (max-width: 650px){
        padding: 2rem;
    }
`
const Text = styled.div`
    flex: 0.60;
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

const Span = styled.p`
    font-size: 2rem;
    padding-top: 1.5rem;

    @media screen and (max-width: 820px){
        font-size: 1.8rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1.5rem;
        line-height: 2rem;
        padding-top: 1rem;
    }
`
const ImgBox = styled.div`
    flex: 0.40;
    text-align: center;
`

const Img = styled.img`
`