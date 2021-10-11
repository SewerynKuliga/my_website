import React from 'react';
import styled from 'styled-components';


function Courses() {
    return (
        <Container>
            <Header>Kursy:</Header>
            <Course>
                <CoursName>JavaScript od Podstaw do Eksperta</CoursName>
                <p>Link:
                    <a href="https://www.udemy.com/course/javascript-od-podstaw-do-eksperta" target="_blank">
                       www.udemy.com/course/javascript-od-podstaw-do-eksperta
                    </a>
                </p>
            </Course>
            <Course>
                <CoursName>HTML i CSS - poznaj podstawy i zacznij programować!</CoursName>
                <p>Link: 
                    <a href="https://www.udemy.com/course/kurs-html-i-css-od-podstaw" target="_blank">
                      www.udemy.com/course/kurs-html-i-css-od-podstaw
                    </a>
                </p>
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
    padding: 3rem;
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
`