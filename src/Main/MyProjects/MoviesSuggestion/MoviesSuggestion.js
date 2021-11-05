import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function MoviesSuggestion() {
  let history = useHistory();

  function handleClick() {
    history.push("/Project-Movies-Suggestion");
  }
  return (
    <Container>
      <Subtitle>Movies Suggestion</Subtitle>
      <Description>
        &emsp;Zrobiony w React projekt Single-Page-Application polegajacy na
        przedstawieniu użytkownikowi proponowanych filmów z bazy danych.
        Użytkownik będzie mógł dodać poszczególne tutuły do swojej biblioteki.
        <br />
        <br />
        Kliknij w link poniżej aby ją zobaczyć:
      </Description>
      <LinkLP onClick={handleClick} target="_blank">
        Movies Suggestion
      </LinkLP>
      <Links>
        Link:&nbsp;
        <Link
          href="https://github.com/SewerynKuliga/tinder_for_movies"
          target="_blank"
        >
          Github - Movies Suggestion
        </Link>
      </Links>
    </Container>
  );
}

export default MoviesSuggestion;

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
  cursor: pointer;
  font-weight: bold;
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
