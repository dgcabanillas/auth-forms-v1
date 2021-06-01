import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Grid } from '@material-ui/core';
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
import { useRegister }  from 'src/graphql/user/useRegister';

const Register = () => {

    const { user } = useContext(AuthContext);
    const { gotoHome, gotoLogin } = useContext(RouterContext);
    const [register, { errors, loading }] = useRegister();

    const formik = useFormik({
        initialValues: {
            email:      '',
            nombre:     '',
            apellido:   '',
            dni:        '',
            password:   ''
        },
        validationSchema: Yup.object({
            email:      Yup.string()
                            .email('Ingrese un correo válido.')
                            .required('El correo no puede ser vacío'),
            nombre:     Yup.string().required('El nombre no puede ser vacío'),
            apellido:   Yup.string().required('El apellido no puede ser vacío'),
            dni:        Yup.string().required('El dni no puede ser vacío'),
            password:   Yup.string()
                            .min(6, 'Debe tener mínimo 6 carácteres')
                            .max(50, 'Debe tener máximo 50 carácteres')
                            .required('El password no puede ser vacío'),
        }),
        onSubmit: ( args ) => { register({ variables: args }); }
    })

    const handleChange = (e) => {
        formik.handleChange (e);
        errors[e.target.name] = '';
    }

    useEffect(() => { if( user ) gotoHome() }, [user])

    return (
        <FormContainer width={520}>
            <FormIcon path='/svg/register.svg'/>
            <FormTitle text='crear cuenta'/>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <CTextField 
                            name='nombre'
                            label="Nombres"
                            value={formik.values.nombre}
                            onChange={handleChange}
                            errorText={formik.errors.nombre || errors.nombre || null }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CTextField 
                            name='apellido'
                            label="Apellidos"
                            value={formik.values.apellido}
                            onChange={handleChange}
                            errorText={formik.errors.apellido || errors.apellido || null }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CTextField 
                            name='email'
                            label="Correo electrónico"
                            value={formik.values.email}
                            onChange={handleChange}
                            errorText={formik.errors.email || errors.email || null }
                        />
                    </Grid> 
                    <Grid item xs={12} sm={5}>
                        <CTextField 
                            name='dni'
                            label="Documento de identidad"
                            value={formik.values.dni}
                            onChange={handleChange}
                            errorText={formik.errors.dni || errors.dni || null }
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <CPasswordField 
                            name='password'
                            label="Contraseña"
                            value={formik.values.password}
                            onChange={handleChange}
                            errorText={formik.errors.password || errors.password || null }
                        />
                    </Grid>
                </Grid>
                <SubmitButton 
                    text='registrar'
                    disabled={loading}
                />
            </form>
            <CDivider height={12}/>
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
            <CLink 
                onClick={gotoLogin}
                text='Ya tengo una cuenta'
            />
        </FormContainer>
    )
}

Register.layout = MainLayout;

export default Register;
