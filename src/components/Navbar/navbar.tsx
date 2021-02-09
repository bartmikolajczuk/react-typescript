import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        color: '#242424',
        fontSize: '32px',
        lineHeight: '32px',
        margin: '0 auto',
        textAlign: 'center',
    },
    appBar: {
        background: '#f1d624',
        height: '80px',
        alignItems: 'center',
        boxShadow: 'none',
        flexWrap: 'wrap',

    }
}));
type NavbarProps = { title: string };

const Navbar = ({ title }: NavbarProps ) => {
    const classes = useStyles();

    return (
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <h6 className={classes.title}>
                        {title}
                    </h6>
                </Toolbar>
            </AppBar>
    );
};

export default Navbar;
