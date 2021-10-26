import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide() {
    return (
        <Container>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
            >
                <DIIIV>1</DIIIV>
                <DIIIV>2</DIIIV>
                <DIIIV>3</DIIIV>
            </Slider>
        </Container>
    )
}

export default Slide;

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
const DIIIV = styled.div`
font-size: 5rem;
text-align: center;
padding: 1rem;
`