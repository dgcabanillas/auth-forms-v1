import React from 'react';
import PropTypes from 'prop-types';
import { Link, withStyles } from '@material-ui/core';
import clsx from 'clsx';

const styles = (theme) => ({
    root: {
        margin: '8px auto 4px',
        fontSize: 12,
        fontWeight: 500,
        color: theme.palette.text.secondary,
    }
});

const CLink = ( props ) => {

    const { classes, className, text, ...other } = props;

    return (
        <Link
            component   = "button"
            variant     = "body2"
            className   = {clsx(classes.root, className)}
            { ...other }
        >
            { text }
        </Link>
    )
}

CLink.defaultProps = {
    text: 'sin ref',
}

CLink.propTypes = {
    text: PropTypes.string,
}

export default withStyles(styles)(CLink);
