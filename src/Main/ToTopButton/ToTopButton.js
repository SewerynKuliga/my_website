import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible &&
                <Container
                    onClick={scrollToTop}
                >
                    <ArrowUpwardIcon />
                    <p>up</p>
                </Container>}
        </>
    )
}

export default ToTopButton;

const Container = styled.div`
    display: block;
    position: fixed;

    width: 5rem;
    height: 5rem;
    background-color: rgba(228,230,235,0.7);
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    border-radius: 0.8rem;
    transition-duration: 0.5s;
    text-align: center;
    padding-top: 1rem;
    z-index: 5;
    p {
        visibility: hidden;
    }
    &:hover  {
        color: red;
        height: 6rem;
        box-shadow: 0 0.5rem 1rem rgba(255, 0, 0, 0.616);
    }
    &:hover > p {
        visibility: visible;
    }

    svg{
        font-size: 4rem;
    }

    @media screen and (max-width: 650px){
        width: 3rem;
    height: 4rem;
    padding-top: 0.3rem;
    bottom: 1.4rem;
    right: 1rem;
    
    svg {
        font-size: 3rem;
    }
    &:hover  {
        color: red;
        height: 5rem;
        box-shadow: 0 0.5rem 1rem rgba(255, 0, 0, 0.616);
    }

    }
`