import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: 28,
        fontWeight: 700,
        marginTop: 12,
        color: theme.palette.primary.dark,
    }
}))

const FormTitle = ( props ) => {
    const classes = useStyles();

    return (
        <Typography 
            component='h1' 
            variant='subtitle1' 
            align='center'
            { ...props }
            className={clsx(props.className, classes.root)}
        >
            { props.text.toUpperCase() }
        </Typography>
    )
}

FormTitle.defaultProps = {
    text: 'NO TITLE',
}

FormTitle.propTypes = {
    text: PropTypes.string,
}

export default FormTitle
