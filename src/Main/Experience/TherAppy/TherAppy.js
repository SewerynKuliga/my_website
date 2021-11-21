import React from "react";
import styled from "styled-components";
import LogoTherAppy from "../../Images/LogoTherAppy.png";

function TherAppy() {
  return (
    <Body>
      <Img src={LogoTherAppy} alt="Logo TherAppy" />
      <Position>Junior React Developer</Position>
      <br />
      <Firm>TherAppy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wolontariat</Firm>
      <br />
      <WorkTime>Listopad 2021 - Obecnie</WorkTime>

      <HeaderDuties>Wykaz obowiązków:</HeaderDuties>
      <ListOfDuties>
        <li> - rozwijanie aplikacji w React</li>
        <li> - nauka Redux, REST API, Grid Material UI </li>
      </ListOfDuties>
      <MyOpinion>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projekt zespołowy złożony ze znajomych,
        którzy widząc wyższy cel w produkcji tej aplikacji postanowili go
        rozwijać. Chętnie wszedłem w ten projekt, ponieważ chciałem nauczyć się
        Reduxa oraz szlifować swoje umiejętności w React. Praca nad tym
        projektem każdego dnia polepsza moje umiejętności poruszania się w React
        oraz jego komunikacji z backendem.
      </MyOpinion>
    </Body>
  );
}

export default TherAppy;

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
