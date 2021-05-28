import React from 'react'
import { TextField } from '@material-ui/core';

const CTextField = ( props ) => {
    return (
        <TextField 
            margin='normal'
            variant='outlined'
            size='small'
            fullWidth
            { ...props }
        />
    )
}

export default CTextField
