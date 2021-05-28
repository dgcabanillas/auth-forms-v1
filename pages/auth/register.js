import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import MainLayout       from 'components/layout/MainLayout';
import CTextField       from 'components/customized/CTextField';
import FormContainer    from 'components/customized/FormContainer';
import SubmitButton     from 'components/customized/SubmitButton';
import FormTitle        from 'components/customized/FormTitle';
import CDivider         from 'components/customized/CDivider';
import CLink            from 'components/customized/CLink';
import FormIcon         from 'components/pages/auth/FormIcon';
import RouterContext    from 'src/context/router/router.context';

const Register = () => {

    const { gotoHome, gotoLogin } = useContext(RouterContext);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email:      '',
            nombre:     '',
            apellido:   '',
            dni:        '',
            password:   ''
        },
        onSubmit: (data) => {
            console.log( data );
        }
    })

    const toggleShowPassword = () => { setShowPassword( !showPassword ); }
    const handleMouseDownPassword = (e) => { e.preventDefault(); }

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
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CTextField 
                            name='apellido'
                            label="Apellidos"
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CTextField 
                            name='email'
                            label="Correo electrónico"
                            onChange={formik.handleChange}
                        />
                    </Grid> 
                    <Grid item xs={12} sm={5}>
                        <CTextField 
                            name='dni'
                            label="Documento de identidad"
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <CTextField 
                            name='password'
                            label="Contraseña"
                            onChange={formik.handleChange}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={toggleShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>
                <SubmitButton text='registrar'/>
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
