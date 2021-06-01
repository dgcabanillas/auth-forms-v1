import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MainLayout       from 'components/layout/MainLayout';
import CTextField       from 'components/customized/CTextField';
import CPasswordField   from 'components/customized/CPasswordField';
import FormContainer    from 'components/customized/FormContainer';
import SubmitButton     from 'components/customized/SubmitButton';
import FormTitle        from 'components/customized/FormTitle';
import CDivider         from 'components/customized/CDivider';
import CLink            from 'components/customized/CLink';
import FormIcon         from 'components/pages/auth/FormIcon';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';
import { useLogin }     from 'src/graphql/user/useLogin';

const Login = () => {

    const { user } = useContext(AuthContext);
    const { gotoHome, gotoRecover, gotoRegister } = useContext(RouterContext);
    const [login, { errors, loading }] = useLogin();

    const formik = useFormik({
        initialValues: {
            email:      '',
            password:   ''
        },
        validationSchema: Yup.object({
            email:      Yup.string()
                            .email('Ingrese un correo válido.')
                            .required('El correo no puede ser vacío'),
            password:   Yup.string()
                            .min(6, 'Debe tener mínimo 6 carácteres')
                            .max(50, 'Debe tener máximo 50 carácteres')
                            .required('El password no puede ser vacío'),
        }),
        onSubmit: ( args ) => { login({ variables: args }); },
    })
    
    const handleChange = (e) => {
        formik.handleChange (e);
        errors[e.target.name] = '';
    }

    useEffect(() => { if( user ) gotoHome() }, [user])

    return (
        <FormContainer>
            <FormIcon path='/svg/login.svg'/>
            <FormTitle text='ingresar'/>
            <form onSubmit={formik.handleSubmit}>
                <CTextField 
                    name='email'
                    label="Correo electrónico"
                    value={formik.values.email}
                    onChange={handleChange}
                    errorText={formik.errors.email || errors.email || null }
                />
                <CPasswordField 
                    name='password'
                    label="Contraseña"
                    value={formik.values.password}
                    onChange={handleChange}
                    errorText={formik.errors.password || errors.password || null }
                />
                <SubmitButton text='ingresar' disabled={loading}/>
            </form>
            <CDivider height={12}/>
            <CLink 
                onClick={gotoRecover}
                text='He olvidado mi contraseña'
            />
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
            <CLink 
                onClick={gotoRegister}
                text='Crear una cuenta'
            />
        </FormContainer>
    )
}

Login.layout = MainLayout;

export default Login;
