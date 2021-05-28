import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > div:nth-child(odd)': {
            flexGrow: 1,
            height: 1,
            borderTop: `2px solid ${theme.palette.primary.dark}`,
            marginTop: 30,
        }
    },
    icon: ({ path }) => ({
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${theme.palette.primary.dark}`,
        borderRadius: '50%',
        '& > div': {
            width: '90%',
            height: '90%',
            backgroundColor: theme.palette.primary.dark,
            mask: `url(${ path }) no-repeat center`,
            maskSize: '80%',
        }
    })
}));

const FormIcon = ({ path }) => {
    const classes = useStyles({ path });

    return (
        <div className={classes.root}>
            <div />
            <div className={classes.icon}>
                <div />
            </div>
            <div />
        </div>
    )
}

FormIcon.propTypes = {
    path: PropTypes.string.isRequired,
}

export default FormIcon
