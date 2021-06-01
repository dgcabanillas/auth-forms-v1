import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    main: {
        width: '100%',
        height: '100vh',
        background: 'rgb(147,151,255)',
        backgroundImage: 'url("/images/main-bg.png")',
        backgroundSize: 'cover',
    },
    overlay: {
        width: '100%',
        height: '100%',
        background: 'rgb(255 255 255 / 5%)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const MainLayout = ( props ) => {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <div className={classes.overlay}>
                { props.children }
            </div>
        </main>
    )
}

export default MainLayout;
