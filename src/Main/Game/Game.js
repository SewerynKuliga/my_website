import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";



function Game() {
    let history = useHistory();

    function handleClick() {
        history.push("/FirstGame");
    }

    return (
        <Container>
            <Header>Gra</Header>
            <FirstGame>
                <P>
                    Zapraszam Cię na stworzoną przeze mnie grę. <br />
                    Jest to gra logiczna, która posiada kilka poziomów.<br />
                    Pierwszy poziom jest najłatwiejszy, w następnym i kolejnych wzrasta poziom trudności.<br />
                    Więcej niestety zdradzić nie mogę.
                </P>
                <LetsPlay 
                variant="outlined" 
                color="error" 
                onClick={handleClick}
                style={{fontSize: "2.5rem"}} >
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
    margin-top: 5.5rem;
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
const FirstGame = styled.div`
    width: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
`
const P = styled.p`
    font-size: 2rem;
    line-height: 2.3rem;
`

const LetsPlay = withStyles({
    root: {
        marginTop: 30,
        width: 300,
        height: 50
    }
})(Button);
