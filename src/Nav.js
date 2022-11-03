import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Nav = () => {

    

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Navigation Bar
                            </Typography>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About Us</Button>
                            <Button color="inherit">Contact</Button>
                        </Toolbar>
                    </AppBar>
                </Box> <br />
        </>
    )
}

export default Nav;