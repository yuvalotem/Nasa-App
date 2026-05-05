import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div className="NavBar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <i className="fas fa-user-astronaut"></i>
                    </IconButton>
                    <Link to='/' onClick={props.movePage}>
                        <Typography variant="h6">
                            <Button color="inherit"><i className="fas fa-home"></i></Button>
                            Home
                        </Typography>
                    </Link>
                    <Link to='/search' onClick={props.movePage}>
                        <Typography variant="h6">
                            <Button color="inherit"><i className="fas fa-search"></i></Button>
                            Search
                        </Typography>
                    </Link>
                    <Link to='/favourites' onClick={props.movePage}>
                        <Typography variant="h6">
                            <Button color="inherit"><i className="fas fa-star"></i></Button>
                            Favs
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

