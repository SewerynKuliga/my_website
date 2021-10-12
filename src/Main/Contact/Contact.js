import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';


function Contact() {
    return (
        <Container>
            <Header>Kontakt:</Header>
            <Box>
                <Contacts>
                    <Link
                        href="https://www.linkedin.com/in/sewerynkuliga/"
                        target="_blank"
                    >
                        <LinkedInIcon
                            style={{ fontSize: '15rem', color: "rgb(0,115,178)" }}
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
                            style={{ fontSize: '15rem', color: "rgb(211,45,44)" }}
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
                            style={{ fontSize: '15rem', color: "rgb(12,135,239)" }}
                            titleAccess="Facebook"
                        />
                    </Link>
                    <Name>Facebook</Name>
                </Contacts>
            </Box>
        </Container>
    )
}

export default Contact;

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
const Contacts = styled.div`
    width: 15rem;
    height: auto;
    margin-top: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
    text-align: center;
    flex: 0.33;
`

const Box = styled.div`
    display: flex;
`

const Name = styled.h1`
    font-size: 3rem;
`