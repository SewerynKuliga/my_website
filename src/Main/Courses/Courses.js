import React from 'react';
import styled from 'styled-components';


function Courses() {
    return (
        <Container>
            <Header>Kursy<span style={{color: "red"}}><b>:</b> </span></Header>
            <Course>
                <CoursName>JavaScript od Podstaw do Eksperta</CoursName>
                <CourseDescription>
                    <li>- tworzenie animowanej galerii obrazów z miniaturkami</li>
                    <li>- stworzenie pokazu slajdów</li>
                    <li>- praca na tablicach</li>
                    <li>- obsługa Cookies</li>
                    <li>- walidacja danych w formularzach</li>
                    <li>- nauka funkcji, instrukcji warunkowych oraz operatorów arytmetycznych </li>
                </CourseDescription>
                
                <Links>Link:&nbsp;
                    <Link href="https://www.udemy.com/course/javascript-od-podstaw-do-eksperta" target="_blank">
                       www.udemy.com/course/javascript-od-podstaw-do-eksperta
                    </Link>
                </Links>
            </Course>
            <Course>
                <CoursName>HTML i CSS - poznaj podstawy i zacznij programować!</CoursName>
                <CourseDescription>
                    <li>- stworzenie własnej strony bazującej na HTML i CSS</li>
                    <li>- wykorzystywanie obecnie panujących standardów przygotowywania projektów</li>
                    <li>- nauka Responsive Web Design</li>
                    <li>- poznanie właściwego pozycjonowania stron</li>
                    <li>- nauka znaczników elementów liniowych i blokowych</li>
                </CourseDescription>
                <Links>Link:&nbsp;
                    <Link href="https://www.udemy.com/course/kurs-html-i-css-od-podstaw" target="_blank">
                      www.udemy.com/course/kurs-html-i-css-od-podstaw
                    </Link>
                </Links>
            </Course>
        </Container>
    )
}

export default Courses;

const Container = styled.div`
    width: auto;
    height: auto;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
`

const Header = styled.h1`
    font-size: 3.5rem;
`

const Course = styled.div`
    width: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`

const CoursName = styled.h1`
    font-size: 2.8rem;
    margin: 1rem;
    margin-bottom: 2.5rem;
`

const CourseDescription = styled.ul`
    margin-left: 2rem;
    margin-bottom: 2rem;

    li {
      font-size: 2rem;
      padding-bottom: 0.5rem;
    }
`

const Links = styled.p`
    font-size: 1.8rem;
`

const Link = styled.a`
    color: black;

    &:hover {
        color: red;
    }
`