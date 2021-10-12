import React from 'react';
import styled from 'styled-components';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiGit, SiGitlab, SiGithub } from 'react-icons/si';
import { AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc'



function Skills() {
    return (
        <Container>
            <Header>Umiejętności:</Header> <br />
            <SkillsPlace>
                <Box>
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
                </Box>
                <Box >
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
                </Box>
                <Box>
                    <SkillPlace>
                        <SiGit style={{ fontSize: "10rem", color: "rgb(230,64,32)" }} />
                        <p>Git</p>

                        <Box>
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
                        </Box>
                    </SkillPlace>
                </Box>
            </SkillsPlace>
        </Container>
    )
}

export default Skills;

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

const SkillsPlace = styled.div`
    width: auto;
    height: auto;
    text-align: center;
`
const Box = styled.div`
    display: flex;
`

const SkillPlace = styled.div`
    width: 15rem;
    height: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
    flex: 16.6;
    &:hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 128, 251, 0.616);
    }
    p {
        margin-top: 0.7rem;
        font-size: 2rem;
    }
`