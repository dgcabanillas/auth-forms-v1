import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const SubmitButton = ( props ) => {

    const { text, ...other } = props;

    return (
        <Button 
            { ...other }
            fullWidth
            size='large'
            type='submit'
            color='primary' 
            variant='contained'
            style={{ marginTop: 16 }}
        > { text } </Button>
    )
}

SubmitButton.defaultProps = {
    text: 'sin texto',
}

SubmitButton.propTypes = {
    text: PropTypes.string,
}

export default SubmitButton
