import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: ({ width }) => width || 350,
        maxWidth: '90%',
        background: 'rgb(255 255 255 / 80%)',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
        padding: theme.spacing(4, 3),
        backdropFilter: 'blur(10px)',
        boxShadow: theme.shadows[5],
        borderRadius: 8,
    }
}))

const FormContainer = ( props ) => {
    const classes = useStyles({ width: props.width });

    return (
        <div component={Paper} className={classes.root}>
            { props.children }
        </div>
    )
}

FormContainer.propTypes = {
    width: PropTypes.number,
}

export default FormContainer;
