import { useState }     from 'react';
import { useMutation }  from '@apollo/client';
import { RECOVER }      from 'src/graphql/user';
import { useSnackbar }  from 'notistack';

export const useRecover = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [callback, { loading }] = useMutation( RECOVER );
    const [output, setOutput] = useState({ data: false });

    function __callback__ ( args ) {
        callback( args )
            .then( res => { 
                if( res.data.recover ) {
                    setOutput({ data: true });
                    enqueueSnackbar(
                        'Por favor revise la bandeja de su correo',
                        {variant: 'success'}
                    )
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
