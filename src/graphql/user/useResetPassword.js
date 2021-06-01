import { useContext, useEffect, useState } from 'react';
import { RESET_PASSWORD }   from 'src/graphql/user';
import { useMutation }      from '@apollo/client';
import { formatError }      from 'src/util/helpers';
import { useSnackbar }      from 'notistack';
import RouterContext        from 'src/context/router/router.context';
import AuthContext          from 'src/context/auth/auth.context';

export const useResetPassword = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { logout } = useContext(AuthContext);
    const { gotoLogin } = useContext(RouterContext);

    const [callback, { loading }] = useMutation( RESET_PASSWORD );
    const [errors, setErrors] = useState({});

    function __callback__ ( args ) {
        callback( args )
            .then( res => {
                const { data: { resetPassword: { errors }}} = res;
                if( errors.length > 0 ) {
                    setErrors(formatError(errors));
                } else {
                    enqueueSnackbar( '¡Se ha cambiado la contraseña!', {variant: 'success'});
                    logout();
                    gotoLogin();
                }
                
            })
            .catch( e => enqueueSnackbar( e.message, {variant: 'error'}));
    }

    return [__callback__, { errors, loading}]
}
