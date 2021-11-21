import React from "react";
import styled from "styled-components";

function StarWarsPlanetsEncyclopedia() {
  return (
    <Container>
      <Subtitle> Star Wars Planets Encyclopedia</Subtitle>
      <Description>
        &emsp;Aplikacja podaje tytuły filmów i przyporządkowuje do nich planety,
        na których działa się akcja w danym filmie. Opis planety zawiera jej
        nazwę, okres rotacji, średnicę, klimat oraz populację. <br />
        <br />
        <br />
        Kliknij w link poniżej aby zobaczyć:
      </Description>
      <LinkLP
        href="https://user-images.githubusercontent.com/81814080/141495990-83792ad6-28e6-459d-aaee-ce8e8d62418a.png"
        target="_blank"
      >
        Star Wars Planets Encyclopedia
      </LinkLP>
      <Links>
        Link:&nbsp;
        <Link
          href="https://github.com/SewerynKuliga/star_wars_planet_encyclopedia"
          target="_blank"
        >
          Github - Star Wars Planets Encyclopedia
        </Link>
      </Links>
    </Container>
  );
}

export default StarWarsPlanetsEncyclopedia;

const Container = styled.div`
  width: auto;
  margin: 2rem 3rem 0rem 3rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgb(206, 208, 210);
  @media screen and (max-width: 820px) {
    margin: 1rem 0rem 0rem 0.5rem;
  }
`;

const Subtitle = styled.h1`
  font-size: 2.8rem;
  margin: 1rem;
  margin-bottom: 0rem;

  @media screen and (max-width: 820px) {
    font-size: 2rem;
    margin: 0rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  padding: 2rem;
  line-height: 2.3rem;
  @media screen and (max-width: 820px) {
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

const LinkLP = styled.a`
  color: black;
  font-size: 1.8rem;
  margin-left: 5rem;
  &:hover {
    color: red;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
    margin-left: 2rem;
  }
`;

const Links = styled.p`
  font-size: 1.8rem;
  margin-top: 3rem;
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
  }
`;

const Link = styled.a`
  color: black;
  &:hover {
    color: red;
  }
`;
