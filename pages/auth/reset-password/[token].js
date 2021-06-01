import React, { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { CircularProgress } from '@material-ui/core';
import { useRouter }    from 'next/router';
import MainLayout       from 'components/layout/MainLayout';
import CTextField       from 'components/customized/CTextField';
import CPasswordField   from 'components/customized/CPasswordField';
import FormContainer    from 'components/customized/FormContainer';
import SubmitButton     from 'components/customized/SubmitButton';
import FormTitle        from 'components/customized/FormTitle';
import CDivider         from 'components/customized/CDivider';
import CLink            from 'components/customized/CLink';
import FormIcon         from 'components/pages/auth/FormIcon';
import FormMessage      from 'components/pages/auth/FormMessage'
import RouterContext    from 'src/context/router/router.context';
import { useResetPassword } from 'src/graphql/user/useResetPassword';

const ResetPassword = () => {

    const router = useRouter();
    const { gotoHome, gotoLogin } = useContext(RouterContext);
    const [data, setData] = useState( null );
    const [message, setMessage] = useState('');
    const [resetPassword, { errors, loading }] = useResetPassword();

    useEffect(() => {
        if( router?.query?.token ) {
            try {
                setData({
                    ...jwtDecode(router.query.token),
                    token: router.query.token
                });
            } catch {
                setMessage('Este enlace no es válido');
            }
        }
    }, [router]);

    useEffect(() => {
        if( data?.exp && data?.exp * 1000 < Date.now() ) {
            setMessage('Este enlace ha expirado y ya no es válido.');
        }
    }, [data])

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password:   Yup.string()
                            .min(6, 'Debe tener mínimo 6 carácteres')
                            .max(50, 'Debe tener máximo 50 carácteres')
                            .required('El password no puede ser vacío'),
        }),
        onSubmit: ( args ) => { 
            resetPassword({ 
                variables: { 
                    token:      data.token, 
                    password:   args.password 
                }
            }) 
        }
    })

    const handleChange = (e) => {
        formik.handleChange (e);
        errors[e.target.name] = '';
    }


    if ( !data && !message ) return <CircularProgress />;

    return (
        <FormContainer width={400}>
            { 
                message ? <>
                    <FormIcon path='/svg/error.svg'/>
                    <FormMessage text={message}/>
                </> : <>
                    <FormIcon path='/svg/reset-password.svg'/>
                    <FormTitle text='cambiar contraseña'/>
                    <form onSubmit={formik.handleSubmit}>
                        <CTextField 
                            label="Correo electrónico"
                            disabled={true}
                            value={data.email}
                        />
                        <CPasswordField 
                            name='password'
                            label="Nueva contraseña"
                            value={formik.values.password}
                            onChange={handleChange}
                            errorText={formik.errors.password || errors.password || null }
                        />
                        <SubmitButton text='enviar' disabled={loading}/>
                    </form>
                </>
            }
            <CDivider height={12}/>
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
            <CLink 
                onClick={gotoLogin}
                text='Ir al panel de ingreso'
            />
        </FormContainer>
    )
}

ResetPassword.layout = MainLayout;

export default ResetPassword;
