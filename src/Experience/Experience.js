import React from 'react';
import styled from 'styled-components';
import LogoOakfusion from '../Images/LogoOakfusion.PNG'


function Experience() {
    return (
        <Container>
            <Header>Doświadczenie zawodowe:</Header>
            <OakfusionCompany>
                <Img src={LogoOakfusion} alt="Logo Oakfusion" />
                <Position>Junior Frontend Developer</Position><br />
                <Firm>Oakfusion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staż</Firm><br />
                <WorkTime>Wrzesień 2021 - obecnie</WorkTime>

                <HeaderDuties>Wykaz obowiązków:</HeaderDuties>
                <ListOfDuties>
                    <li>- tworzenie oraz rozwijanie aplikacji w React i Typescript</li>
                    <li>- rozwijanie kompetencji miękkich podczas pracy w małej grupie</li>
                    <li>- nauka dobrych zasad programowania - KISS, DRY</li>
                    <li>- nauka nowych narzędzi pracy: TypeScript, Docker</li>
                    <li>- wykonywanie zleconych zadań w wyznaczonym czasie</li>
                    <li>- pomoc innym osobom na stażu w zadaniach</li>
                </ListOfDuties>
                <MyOpinion>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pierwsze miejsce pracy, w ktróym mam do czynienia z zespołem
                    stażystów, gdzie każdy dba o wzajemne relacje. Poprzez wspieranie się wzajemnie w zadaniach, a także
                    poza nimi, atmosfera przybrała postać prawdziwie zgranego zespołu. Wyniosłem z tego stażu ogrom wiedzy
                    (głownie z TypeScript), która poprawiła moje umiejętności pisania zrozumiałego i prostego do analizy
                    kodu. Przez Code Review z mentorem uczyłem się czego unikać w procesie tworzenia aplikacji,
                    co poprawić żeby było bardziej czytelne, ale też jakie dobre nawyki kodowania mam wyrobione.
                </MyOpinion>
            </OakfusionCompany>
        </Container>
    )
}

export default Experience;

const Container = styled.div`
    width: auto;
    height: auto;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 3rem;
`
const Header = styled.h1`
    font-size: 3.5rem;
`

const OakfusionCompany = styled.div`
    width: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`

const Img = styled.img`
    width: 6rem;
    display: block;
    float: left;
    margin-right: 2rem;
    margin-top: 1rem;
`
const Position = styled.p`
    font-size: 3rem;
    margin-top: 0.1rem;
`


const Firm = styled.p`
    font-size: 1.8rem;
`
const WorkTime = styled.p`
    font-size: 1.8rem;
    margin-left: 7rem;
`

const HeaderDuties = styled.h1`
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
`

const ListOfDuties = styled.ul`
    margin-left: 4rem;
  li {
      font-size: 1.9rem;
      padding-bottom: 0.4rem;
  }
`

const MyOpinion = styled.p`
    font-size: 1.9rem;
    margin-top: 1rem;
    line-height: 2.5rem;
`