import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const SubmitButton = ( props ) => {
    return (
        <Button 
            color='primary' 
            variant='contained'
            type='submit'
            size='large'
            fullWidth
            style={{ marginTop: 16 }}
            { ...props }
        > { props.text } </Button>
    )
}

SubmitButton.defaultProps = {
    text: 'sin texto',
}

SubmitButton.propTypes = {
    text: PropTypes.string,
}

export default SubmitButton
