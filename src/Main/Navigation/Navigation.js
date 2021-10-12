import styled from 'styled-components';
import DirectionsIcon from '@mui/icons-material/Directions';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { withStyles } from '@material-ui/styles';


function Navigation() {
    return (
        <Container>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <DirectionsIcon variant="contained" {...bindTrigger(popupState)} style={{ fontSize: "5rem" }}>
                            Dashboard
                        </DirectionsIcon>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItemu onClick={popupState.close}>O Mnie</MenuItemu>
                            <MenuItemu onClick={popupState.close}>Doświadczenie <br />zawodowe</MenuItemu>
                            <MenuItemu onClick={popupState.close}>Umiejętności</MenuItemu>
                            <MenuItemu onClick={popupState.close}>Kursy</MenuItemu>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
            <p>Nawigacja</p>
             {/* Trzeba dopracować tąnawigację... :D  */}
        </Container>
    )
}

export default Navigation;

const Container = styled.div`
    display: none;
    position: fixed;
    width: 5rem;
    height: 6.5rem;
    background-color: rgb(255,255,255);
    z-index: 999;
    top: 5rem;
    left: 0.5rem;
    box-shadow: 0 0 1rem rgb(206,208,210);
    border-radius: 0.5rem;
    text-align: center;
    `

const MenuItemu = withStyles({
    root: {
        fontSize: "1.5rem"
    }
})(MenuItem);