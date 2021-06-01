import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MainLayout       from 'components/layout/MainLayout';
import CTextField       from 'components/customized/CTextField';
import FormContainer    from 'components/customized/FormContainer';
import SubmitButton     from 'components/customized/SubmitButton';
import FormTitle        from 'components/customized/FormTitle';
import CDivider         from 'components/customized/CDivider';
import CLink            from 'components/customized/CLink';
import FormIcon         from 'components/pages/auth/FormIcon';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';
import { useRecover }   from 'src/graphql/user/useRecover';

const Recover = () => {

    const { user } = useContext(AuthContext);
    const { gotoHome, gotoLogin, gotoRegister } = useContext(RouterContext);
    const [recover, { data: success, loading }] = useRecover();

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                    .email('Ingrese un correo válido.')
                    .required('El correo no puede ser vacío'),
        }),
        onSubmit: ( args ) => { recover({ variables: args }); }
    })

    useEffect(() => { if( user ) gotoHome() }, [user])

    return (
        <FormContainer width={400}>
            <FormIcon path='/svg/recover.svg'/>
            <FormTitle text='recuperar cuenta'/>
            <form onSubmit={formik.handleSubmit}>
                <CTextField 
                    name='email'
                    label="Correo electrónico"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    errorText={formik.errors.email}
                    disabled={success}
                />
                <SubmitButton text='enviar' disabled={loading || success}/>
            </form>
            <CDivider height={12}/>
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
            <CLink 
                onClick={gotoLogin}
                text='Ir al panel de ingreso'
            />
            <CLink 
                onClick={gotoRegister}
                text='Crear una cuenta'
            />
        </FormContainer>
    )
}

Recover.layout = MainLayout;

export default Recover;
