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

const Recover = () => {

    const { gotoHome, gotoLogin, gotoRegister } = useContext(RouterContext);

    const formik = useFormik({
        initialValues: {
            usuario:    '',
        },
        onSubmit: (data) => {
            console.log( data );
        }
    })

    return (
        <FormContainer width={400}>
            <FormIcon path='/svg/recover.svg'/>
            <FormTitle text='recuperar cuenta'/>
            <form onSubmit={formik.handleSubmit}>
                <CTextField 
                    name='usuario'
                    label="Correo electrónico"
                    onChange={formik.handleChange}
                />
                <SubmitButton text='enviar'/>
            </form>
            <CDivider height={12}/>
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
            <CLink 
                onClick={gotoLogin}
                text='Regresar al panel de ingreso'
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
