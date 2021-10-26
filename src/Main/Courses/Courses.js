import React from 'react';
import styled from 'styled-components';
import JSBackground from "../Images/JSBackground.jpg";
import HTMLCSSBG from "../Images/HTMLCSSBG.jpg"


function Courses() {
    return (
        <Container>
            <Header>Kursy<span style={{ color: "red" }}><b>:</b> </span></Header>
            <Course
                style={{
                    backgroundImage: `url(${JSBackground})`,
                }}
            >
                <Subtitle>JavaScript od Podstaw do Eksperta</Subtitle>
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
                        Udemy - JavaScript od Podstaw do Eksperta
                    </Link>
                </Links>
            </Course>
            <Course
            style={{
                backgroundImage: `url(${HTMLCSSBG})`,
            }}
            >
                <Subtitle>HTML i CSS - poznaj podstawy i zacznij programować!</Subtitle>
                <CourseDescription>
                    <li>- stworzenie własnej strony bazującej na HTML i CSS</li>
                    <li>- wykorzystywanie obecnie panujących standardów przygotowywania projektów</li>
                    <li>- nauka Responsive Web Design</li>
                    <li>- poznanie właściwego pozycjonowania stron</li>
                    <li>- nauka znaczników elementów liniowych i blokowych</li>
                </CourseDescription>
                <Links>Link:&nbsp;
                    <Link href="https://www.udemy.com/course/kurs-html-i-css-od-podstaw" target="_blank">
                        Udemy - HTML i CSS od podstaw
                    </Link>
                </Links>
            </Course>
        </Container>
    )
}

export default Courses;

const Container = styled.section`
    width: auto;
    height: auto;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;

    @media screen and (max-width: 820px){
        text-align: justify;
        padding: 2rem;
        margin-left: 3%;
        margin-right: 3%;
    }
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

const Course = styled.div`
    width: auto;
    margin: 2rem 3rem 0rem 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
    background:  right no-repeat;
    
        @media screen and (max-width: 820px){
            margin: 1rem 0rem 0rem 0.5rem;
            background: center no-repeat;
        }
        @media screen and (max-width: 450px){
            background: top no-repeat;
            background-position: 30% 50%;
        }
`

const Subtitle = styled.h1`
    font-size: 2.8rem;
    margin: 1rem;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 820px){
        font-size: 2.0rem;
        margin: 0rem;
        margin-bottom: 1rem;
    }
`

const CourseDescription = styled.ul`
    margin-left: 2rem;
    margin-bottom: 2rem;
        @media screen and (max-width: 820px){
            margin: 0rem 0.5rem 1rem 0.5rem;
        }

    li {
      font-size: 2rem;
      padding-bottom: 0.5rem;
      line-height: 2.2rem;

        @media screen and (max-width: 820px){
            font-size: 1.5rem;
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: left;
        }
    }
`

const Links = styled.p`
    font-size: 1.8rem;
    @media screen and (max-width: 820px){
            font-size: 1.5rem;
        }
`

const Link = styled.a`
    color: black;
    &:hover {
        color: red;
    }
    
`