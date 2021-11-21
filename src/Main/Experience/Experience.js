import React from "react";
import styled from "styled-components";
import Oakfusion from "./Oakfusion/Oakfusion";
import TherAppy from "./TherAppy/TherAppy";

function Experience() {
  return (
    <Container>
      <Header>
        Doświadczenie zawodowe
        <span style={{ color: "red" }}>
          <b>:</b>{" "}
        </span>
      </Header>
      <TherAppy />
      <Oakfusion />
    </Container>
  );
}

export default Experience;

const Container = styled.section`
  width: auto;
  height: auto;
  margin-top: 1rem;
  background-color: #fff;
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 0 0 1rem rgb(206, 208, 210);
  border-radius: 1rem;
  padding: 4rem;

  @media screen and (max-width: 820px) {
    text-align: justify;
    padding: 2rem;
    margin-left: 3%;
    margin-right: 3%;
  }
`;
const Header = styled.h1`
  font-size: 3.5rem;

  @media screen and (max-width: 820px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 2.5rem;
  }
`;
