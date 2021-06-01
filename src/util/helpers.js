export const formatError = ( errArray ) => {
    if ( !errArray || errArray.length == 0 ) return {};
    const map = {}
    for(let i = 0; i < errArray.length; i++ ) {
        map[errArray[i]['error']] = errArray[i]['description'];
    }
    return map;
} 