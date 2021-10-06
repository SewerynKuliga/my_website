import React, { useState, useEffect } from 'react';
import styled from 'styled-components';




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
                Przewiń do góry
            </Container>}
        </>
    )
}

export default ToTopButton;

const Container = styled.div`
    display: block;
    position: fixed;

    width: 6rem;
    height: 4rem;
    background-color: red;
    bottom: 1.5rem;
    right: 1.5rem;
    cursor: pointer;

    &:hover {
        color: red;
    }
`