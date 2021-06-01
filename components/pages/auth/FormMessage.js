import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: 500,
        margin: '20px auto',
        color: '#484848',
    }
}));

const FormMessage = ( props ) => {

    const { text, className, ...other } = props;
    const classes = useStyles();

    return (
        <Typography 
            { ...other }
            component="p" 
            variant="h5" 
            align="center"
            className={clsx(className, classes.root)}
        >
            { text }    
        </Typography>
    )
}

FormMessage.defaultProps = {
    text: 'no message'
}

FormMessage.propTypes = {
    text: PropTypes.node
}

export default FormMessage
