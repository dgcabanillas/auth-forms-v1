import React from 'react';
import PropTypes from 'prop-types';
import { Link, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        margin: '6px auto 3px',
        fontSize: 12,
        fontWeight: 500,
        color: theme.palette.primary.dark,
    }
});

const CLink = ( props ) => {

    const { text, ...other } = props;

    return (
        <Link
            { ...other }
            variant = "body2"
            component = "button"
        > { text } </Link>
    )
}

CLink.defaultProps = {
    text: 'sin ref',
}

CLink.propTypes = {
    text: PropTypes.string,
}

export default withStyles(styles)(CLink);
