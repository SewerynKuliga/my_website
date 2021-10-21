import React from 'react';
import styled from 'styled-components';
import MyPhoto from "../Images/MyPhoto.PNG"
import BackgroundBaW from "../Images/BackgroundBaW.jpg"
import BackgroundBaW2 from "../Images/BackgroundBaW2.jpg"


function AboutMe() {
    return (
        <Container>
            <Text>
                <Header><span style={{ color: "red" }}>O Mnie</span>:</Header>
                <P>
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
                    Na stanowisku Junior React Developera odnalazłbym się najszybciej, ponieważ zdaję
                    sobie sprawę, że dużo nauki przede mną, ale solidne podstawy mam już wyuczone poprzez pobyt na stażu
                    jako Junior Frontend Developer, gdzie głównym narzędziem używanym przez nasz zespół był React oraz TypeScript.
                    <br />
                    &emsp;Każdego dnia staram się być najlepszą wersją samego siebie. Lubię pomagać ludziom i czerpać z tego radość.
                    Wierzę, że każdy problem da się rozwiązać rozmową, bo czasami widzimy tylko jedną stronę danego problemu.
                    Konstruktywna krytyka dla mnie to nauka - nowego podejścia, nowego spojrzenia na dany problem i możliwość poprawy
                    powstałych błędów.
                    <br />
                    &emsp;Moją największą wadą jest moja niewiedza do płynnego pisania kodu. Muszę czasami wrócić do danego zagadnienia i
                    utrwalić go sobie. Staram się szukać odpowiedzi na moje pytanie w różny sposób. Staram się zawsze wybierać najprostsze, zarazem
                    najlepsze rozwiązanie dla mojego problemu.
                    <br />
                    &emsp;Strona ta jest swego rodzaju wizytówką oraz moją motywacją do dalszej pracy nad swoimi umiejętnościami programisty.
                    Robię wszytko, aby dotrzeć do szerszego grona odbiorcówco pozwoli mi rozwinąć skrzydła. Staram się rozwijać,
                    być na bieżąco z wszelkimi nowinkami technologicznymiśledząc kanały programistów JS-a i Reacta na Youtube.
                    Każdą wolną chwilę spędzam na udoskonalaniu siebie, oraz moich projektów.
                </P>
            </Text>
            <ImgBox>
                <Img src={MyPhoto} alt="Zdjęcie Seweryn Kuliga" />
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
    margin-top: 4.5rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
    text-align: center;
    line-height: 2rem;
    background: url(${BackgroundBaW}) center no-repeat;
    @media screen and (max-width: 1200px){
        display: block;
        text-align: justify;
        background: #fff url(${BackgroundBaW2}) bottom right no-repeat;
    }
    @media screen and (max-width: 820px){
        padding: 2rem;
        margin-left: 3%;
        margin-right: 3%;
    }
    @media screen and (max-width: 650px){
        padding: 2rem;
    }
`
const Text = styled.div`
    flex: 0.6;
`

const Header = styled.h1`
    font-size: 3.5rem;

    @media screen and (max-width: 820px){
        font-size: 2.5rem;
    }
`

const P = styled.p`
    font-size: 2rem;
    padding-top: 1.5rem;

    @media screen and (max-width: 820px){
        font-size: 1.5rem;
        line-height: 2rem;
        padding-top: 1rem;
    }
`
const ImgBox = styled.div`
    flex: 0.4;
    text-align: center;
`

const Img = styled.img`
    width: 80%;
    margin-top: 5rem;
    max-width: 600px;
    @media screen and (max-width: 820px){
        margin-top: 2rem;
    }
`