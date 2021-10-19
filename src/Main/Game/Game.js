import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";



function Game() {
    let history = useHistory();

    function handleClick() {
        history.push("/FirstGame");
    }

    return (
        <Container>
            <Header>Gra<span style={{ color: "red" }}><b>:</b></span></Header>
            <FirstGame>
                <P>
                    Zapraszam Cię na stworzoną przeze mnie grę. <br />
                    Jest to gra logiczna, która posiada kilka poziomów.<br />
                    Pierwszy poziom jest najłatwiejszy, ale już w następnym i kolejnych wzrasta poziom trudności.<br />
                    Więcej niestety zdradzić nie mogę.
                </P>
                <LetsPlay
                    // onClick={handleClick} 
                    onClick={() => { alert("Gra w procesie tworzenia. Proszę wrócić później ;)") }}
                >
                    ZAGRAJ!
                </LetsPlay>
            </FirstGame>
        </Container >
    )
}

export default Game;

const Container = styled.div`
    position: relative;
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
        padding: 2rem;
        margin-left: 3%;
        margin-right: 3%;
    }
    @media screen and (max-width: 650px){
        padding: 2rem;
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
const FirstGame = styled.div`
    width: auto;
    margin: 2rem 3rem 0rem 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`
const P = styled.p`
    font-size: 2rem;
    line-height: 2.3rem;
    @media screen and (max-width: 820px){
        font-size: 1.5rem;
    }
`

const LetsPlay = styled.button`
    font-size: 2.5rem;
    font-weight: bold;
    padding: 2rem 3rem;
    margin-top: 2rem;
    margin-left: 2rem;
    background-color: rgb(200,30,30);
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 650px){
        font-size: 2rem;
        padding: 0.5rem 0.5rem;
    }
`
