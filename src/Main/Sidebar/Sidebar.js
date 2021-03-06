import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

function Sidebar() {
    return (
        <Container>
            <Icons>
                <Link
                    href="https://www.linkedin.com/in/sewerynkuliga/"
                    target="_blank"
                >
                    <LinkedInIcon
                        style={{ fontSize: '3rem', padding: '0.4rem', color: "rgb(0,115,178)" }}
                        titleAccess="Linkedin"
                    />
                </Link>
                <Link
                    href="https://www.facebook.com/seweryn.kuliga"
                    target="_blank"
                >
                    <FacebookIcon
                        style={{ fontSize: '3rem', padding: '0.4rem', color: "rgb(12,135,239)" }}
                        titleAccess="Facebook"
                    />
                </Link>
                <Link
                    href="mailto:skuligas@gmail.com"
                    target="_blank"
                >
                    <EmailIcon
                        style={{ fontSize: '3rem', padding: '0.4rem', color: "rgb(211,45,44)" }}
                        titleAccess="Mail"
                    />
                </Link>
            </Icons>
            <P>
                K <br />
                O <br />
                N <br />
                T <br />
                A <br />
                K <br />
                T <br />
            </P>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    display: block;
    position: fixed;
    width: 5rem;
    height: 13rem;
    background-color: rgb(255,255,255);
    z-index: 999;
    bottom: 5rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 0 0.5rem 0.5rem 0;
    transform: translateX(-100%);
    transition-duration: 0.3s;

    &:hover {
        transform: translateX(0%);
        transition-duration: 0.3s;
    }

    @media screen and (max-width: 1500px){
        bottom: 7rem;
    }
    @media screen and (max-width: 820px){
        bottom: 3rem;
    }
    @media screen and (max-width: 650px){
        bottom: 1.5rem;
    }
`

const Icons = styled.div`
    display: inline-block;
    padding: 0.5rem;
`

const P = styled.p`
    font-size: 1.5rem;
    transform: translateY(-105%) translateX(150%);
    width: 1.8rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    text-align: center;
    background-color: rgba(255,255,255,0.3);
    border-radius: 0rem 0.3rem 0.3rem 0rem;
    @media screen and (max-width: 650px){
        font-size: 1rem;
        padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    }
`

// const FingerprintIconBot = withStyles({
//     root: {
//         width: 200,
//         height: 200,
//         marginLeft: 250,
//     }
// })(LinkedInIcon);
// import { withStyles } from '@material-ui/styles';