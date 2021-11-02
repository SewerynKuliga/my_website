import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Contact() {
    return (
        <Container>
            <Header>Kontakt<span style={{ color: "red" }}><b>:</b> </span></Header>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}

            >
                <Contacts>
                    <Link
                        href="https://www.linkedin.com/in/sewerynkuliga/"
                        target="_blank"
                    >
                        <LinkedInIcon
                            style={{ fontSize: '12rem', color: "rgb(0,115,178)" }}
                            titleAccess="Linkedin"
                        />
                    </Link>
                    <Name>LinkedIn</Name>
                </Contacts>
                <Contacts>
                    <Link
                        href="mailto:skuligas@gmail.com"
                        target="_blank"
                    >
                        <EmailIcon
                            style={{ fontSize: '12rem', color: "rgb(211,45,44)" }}
                            titleAccess="Mail"
                        />
                    </Link>
                    <Name>Mail</Name>
                </Contacts>
                <Contacts>
                    <Link
                        href="https://www.facebook.com/seweryn.kuliga"
                        target="_blank"
                    >
                        <FacebookIcon
                            style={{ fontSize: '12rem', color: "rgb(12,135,239)" }}
                            titleAccess="Facebook"
                        />
                    </Link>
                    <Name>Facebook</Name>
                </Contacts>
            </Slider>
        </Container>
    )
}

export default Contact;

const Container = styled.section`
    width: auto;
    height: auto;
    margin-top: 1rem;
    display: none;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;
    padding-bottom: 5rem;
    
    @media screen and (max-width: 880px){
        padding-bottom: 3.5rem;
    }
    @media screen and (max-width: 820px){
        display: block;
        padding: 2rem;
        padding-bottom: 3rem;
        margin-left: 3%;
        margin-right: 3%;
    }
`

const Header = styled.h1`
    font-size: 3.5rem;
    @media screen and (max-width: 1500px){

}
    @media screen and (max-width: 820px){
      font-size: 2.8rem;

    }
    @media screen and (max-width: 650px){
     font-size: 2.5rem;
    }
`

const Contacts = styled.div`
    width: auto;
    height: auto;
    padding:  2rem 0rem;
    text-align: center;
    @media screen and (max-width: 820px){
        width: auto;
    }
    @media screen and (max-width: 390px){
        height: 15rem;
    }
`

const Name = styled.h1`
    font-size: 2.5rem;
`