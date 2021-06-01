import { useState }     from 'react';
import { useMutation }  from '@apollo/client';
import { useSnackbar }  from 'notistack';
import { CONFIRM_ACCOUNT_FROM_LINK } from 'src/graphql/user';

export const useConfirmAccountFromLink = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [callback, { loading }] = useMutation( CONFIRM_ACCOUNT_FROM_LINK );
    const [output, setOutput] = useState({ data: false });

    function __callback__ ( args ) {
        callback( args )
            .then( res => { 
                if( res.data.confirmAccountFromLink ) {
                    setOutput({ data: true });
                } else {
                    setOutput({ data: false });
                    enqueueSnackbar(
                        'Algo salió mal en su petición',
                        {variant: 'error'}
                    )
                }
            })
            .catch( e => enqueueSnackbar( e.message, {variant: 'error'}));
    }

    return [__callback__, { ...output, loading }]
}
