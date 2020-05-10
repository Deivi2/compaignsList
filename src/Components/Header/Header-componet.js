import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { ListAlt } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(2)
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar color='primary' position='fixed'  >
            <Toolbar>
                <ListAlt />
                <Typography className={classes.title} variant='h6' component='h1'>
                    Compaigns list
            </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header