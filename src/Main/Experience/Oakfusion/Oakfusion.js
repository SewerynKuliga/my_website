import React from "react";
import styled from "styled-components";
import LogoOakfusion from "../../Images/LogoOakfusion.PNG";

function Oakfusion() {
  return (
    <Body>
      <Img src={LogoOakfusion} alt="Logo Oakfusion" />
      <Position>Junior Frontend Developer</Position>
      <br />
      <Firm>Oakfusion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staż</Firm>
      <br />
      <WorkTime>Wrzesień 2021 - Listopad 2021</WorkTime>

      <HeaderDuties>Wykaz obowiązków:</HeaderDuties>
      <ListOfDuties>
        <li>- tworzenie oraz rozwijanie aplikacji w React i Typescript</li>
        <li>- rozwijanie kompetencji miękkich podczas pracy w małej grupie</li>
        <li>- nauka dobrych zasad programowania - KISS, DRY</li>
        <li>- nauka nowych narzędzi pracy: TypeScript</li>
        <li>- wykonywanie zleconych zadań w wyznaczonym czasie</li>
        <li>- pomoc innym osobom na stażu w zleconych zadaniach</li>
      </ListOfDuties>
      <MyOpinion>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pierwsze miejsce pracy, w którym miałem do
        czynienia z zespołem stażystów, gdzie każdy dbał o wzajemne relacje.
        Poprzez wspieranie się wzajemnie w zadaniach, a także poza nimi,
        atmosfera przybrała postać prawdziwie zgranego zespołu. Wyniosłem z tego
        stażu ogrom wiedzy (głownie z TypeScript), która poprawiła moje
        umiejętności pisania zrozumiałego i prostego do analizy kodu. Przez Code
        Review z mentorem uczyłem się czego unikać w procesie tworzenia
        aplikacji, co poprawić żeby było bardziej czytelne, ale też jakie dobre
        nawyki kodowania mam już wyrobione.
      </MyOpinion>
    </Body>
  );
}

export default Oakfusion;

const Body = styled.div`
  width: auto;
  margin: 2rem 3rem 0rem 3rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgb(206, 208, 210);

  @media screen and (max-width: 820px) {
    margin: 1rem 0.5rem 0rem 0.5rem;
  }
`;

const Img = styled.img`
  width: 6rem;
  display: block;
  float: left;
  margin-right: 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 820px) {
    width: 4rem;
    margin-right: 1rem;
    margin-top: 0rem;
  }
  @media screen and (max-width: 650px) {
  }
`;
const Position = styled.p`
  font-size: 3rem;
  margin-top: 0.1rem;

  @media screen and (max-width: 820px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 2.2rem;
  }
`;

const Firm = styled.p`
  font-size: 1.8rem;
`;
const WorkTime = styled.p`
  font-size: 1.8rem;
  margin-left: 7rem;

  @media screen and (max-width: 820px) {
    margin-left: 0rem;
  }
  @media screen and (max-width: 650px) {
  }
`;

const HeaderDuties = styled.h1`
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
  }
`;

const ListOfDuties = styled.ul`
  margin-left: 4rem;
  li {
    font-size: 1.9rem;
    padding-bottom: 0.5rem;

    @media screen and (max-width: 820px) {
      font-size: 1.6rem;
      margin-left: 1rem;
      text-align: left;
      line-height: 1.8rem;
    }
  }
`;

const MyOpinion = styled.p`
  font-size: 1.9rem;
  margin-top: 1rem;
  line-height: 2.5rem;
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 1rem;
  }
`;
