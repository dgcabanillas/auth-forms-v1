import React from 'react';
import PropTypes from 'prop-types'; 
import { Divider } from '@material-ui/core';

const CDivider = ({ height, noline }) => {
    let h1, h2;
    h1 = h2 = 5;
    if( typeof height === "number" ) {
        h1 = h2 = height;
    } else if ( typeof height === "object" ) {
        [h1, h2] = height;
    }

    return (
        <>
            <div style={{width: '100%', height: h1}} />
            { !noline && <Divider /> }
            <div style={{width: '100%', height: h2}} />
        </>
    )
}

CDivider.propTypes = {
    height:     PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    noline:     PropTypes.bool,
}

export default CDivider;