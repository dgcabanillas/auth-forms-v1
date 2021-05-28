import React, { useContext } from 'react';
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

const Login = () => {

    const { gotoHome, gotoRecover, gotoRegister } = useContext(RouterContext);

    const formik = useFormik({
        initialValues: {
            usuario:    '',
            password:   ''
        },
        onSubmit: (data) => {
            console.log( data );
        }
    })

    return (
        <FormContainer>
            <FormIcon path='/svg/login.svg'/>
            <FormTitle text='ingresar'/>
            <form onSubmit={formik.handleSubmit}>
                <CTextField 
                    name='usuario'
                    label="Correo electrónico o DNI"
                    onChange={formik.handleChange}
                />
                <CTextField 
                    name='password'
                    label="Contraseña"
                    onChange={formik.handleChange}
                    type="password"
                />
                <SubmitButton text='ingresar'/>
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
