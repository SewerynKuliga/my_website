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
        < >
            {isVisible &&
                <Container
                    onClick={scrollToTop}
                    // title="Przewiń stronę do góry"
                >
                    <ArrowUpwardIcon style={{ fontSize: '4rem' }} />
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
    background-color: rgb(228,230,235);
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    border-radius: 0.8rem;
    box-shadow: 0 0.7rem 1rem rgb(228,230,235);
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
`