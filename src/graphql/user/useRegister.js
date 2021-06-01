import { useContext, useEffect, useState } from 'react';
import { useMutation }  from '@apollo/client';
import { formatError }  from 'src/util/helpers';
import { REGISTER }     from 'src/graphql/user';
import { useSnackbar }  from 'notistack';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';

export const useRegister = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { gotoTargetPath } = useContext(RouterContext)
    const { login } = useContext(AuthContext);

    const [callback, { loading }] = useMutation( REGISTER );
    const [output, setOutput] = useState({
        data: null,
        error: null,
        errors: {},
    })

    function __callback__ ( args ) {
        callback( args )
            .then( res => {
                const { data:{ register }} = res;
                setOutput({
                    ...output,
                    data:   register.token.length > 0 ? { token: register.token } : null,
                    errors: formatError(register.errors)
                });
            })
            .catch( e => enqueueSnackbar( e.message, {variant: 'error'}));
    }

    useEffect(() => {
        if( output.data ) {
            login( output.data.token );
            enqueueSnackbar('Cuenta creada con éxito', { variant: 'success'})
            gotoTargetPath();
        }
    }, [output.data])

    return [__callback__, {...output, loading}]
}
