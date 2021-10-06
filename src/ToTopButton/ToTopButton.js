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
                    title="Przewiń stronę do góry"
                >
                    <ArrowUpwardIcon style={{ fontSize: '4rem' }} />
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
    transition-duration: 1s;
    text-align: center;
    padding-top: 1rem;
    &:hover {
        color: red;
        height: 6rem;
    }
`
