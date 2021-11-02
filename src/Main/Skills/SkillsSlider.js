import React from 'react';
import styled from 'styled-components';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiGit, SiGitlab, SiGithub } from 'react-icons/si';
import { AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide() {
    return (
        <Container>
            <Header>Umiejętności<span style={{ color: "red" }}><b>:</b> </span></Header> <br />
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}

            >
                <SkillPlace>
                    <GrReactjs style={{ fontSize: "10rem", color: "rgb(97,218,251)" }} />
                    <p>React</p>
                </SkillPlace>
                <SkillPlace>
                    <SiTypescript style={{ fontSize: "10rem", color: "rgb(49,120, 198)" }} />
                    <p>TypeScript</p>
                </SkillPlace>
                <SkillPlace>
                    <SiJavascript style={{ fontSize: "10rem", color: "rgb(247,223,30)" }} />
                    <p>JavaScript</p>
                </SkillPlace>
                <SkillPlace>
                    <AiFillHtml5 style={{ fontSize: "10rem", color: "rgb(221,75,37)" }} />
                    <p>HTML</p>
                </SkillPlace>
                <SkillPlace>
                    <IoLogoCss3 style={{ fontSize: "10rem", color: "rgb(21,119,180)" }} />
                    <p>CSS</p>
                </SkillPlace>
                <SkillPlace>
                    <AiOutlineApi style={{ fontSize: "10rem", color: "rgb(172,11,22)" }} />
                    <p>API</p>
                </SkillPlace>
                <SkillPlace>
                    <SiGitlab style={{ fontSize: "10rem", color: "rgb(219,65,40)" }} />
                    <p>GitLab</p>
                </SkillPlace>

                <SkillPlace>
                    <SiGithub style={{ fontSize: "10rem", color: "rgb(26,29,33)" }} />
                    <p>GitHub</p>
                </SkillPlace>

                <SkillPlace>
                    <VscGithub style={{ fontSize: "10rem", color: "rgb(88,39,127)" }} />
                    <p>GitDesktop</p>
                </SkillPlace>
                <SkillPlace>
                    <SiGit style={{ fontSize: "10rem", color: "rgb(230,64,32)" }} />
                    <p>Git</p>
                </SkillPlace>
            </Slider>
        </Container>
    )
}

export default Slide;

const Container = styled.section`
    width: auto;
    height: auto;
    display: none;
    margin-top: 1rem;
    background-color: #fff;
    margin-left: 5%;
    margin-right: 5%;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 1rem;
    padding: 4rem;

    @media screen and (max-width: 880px){
        display: block;
        padding-bottom: 3.5rem;
    }
    @media screen and (max-width: 820px){
        padding: 2rem;
        padding-bottom: 3rem;
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

const SkillPlace = styled.div`
    width: auto;
    height: auto;
    text-align: center;
    padding: 1rem 0rem;
    p {
        margin-top: 0.7rem;
        font-size: 2rem;
    }
    @media screen and (max-width: 390px){
        height: 15rem;
    }
`