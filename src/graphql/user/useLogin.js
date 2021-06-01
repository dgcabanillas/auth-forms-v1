import { useContext, useEffect, useState } from 'react';
import { useMutation }  from '@apollo/client';
import { formatError }  from 'src/util/helpers';
import { LOGIN }        from 'src/graphql/user';
import { useSnackbar }  from 'notistack';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';

export const useLogin = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { gotoTargetPath } = useContext(RouterContext)
    const { login: ctx_login } = useContext(AuthContext);

    const [callback, { loading }] = useMutation( LOGIN );
    const [output, setOutput] = useState({
        data: null,
        error: null,
        errors: {},
    })

    function __callback__ ( args ) {
        callback( args )
            .then( res => {
                const { data:{ login }} = res;
                setOutput({
                    ...output,
                    data:   login.token.length > 0 ? { token: login.token } : null,
                    errors: formatError(login.errors)
                });
            })
            .catch( e => enqueueSnackbar( e.message, {variant: 'error'}));
    }

    useEffect(() => {
        if( output.data ) {
            ctx_login( output.data.token );
            gotoTargetPath();
        }
    }, [output.data])

    return [__callback__, {...output, loading}]
}
