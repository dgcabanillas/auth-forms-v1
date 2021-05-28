import React from 'react';
import { useRouter } from 'next/router';
import RouterContext from './router.context';

const RouterState = ( props ) => {
    const router = useRouter();

    /*
        HOME:                       () => '/',
        INGRESAR:                   () => '/auth/login',
        REGISTRAR:                  () => '/auth/registrar',
        EN_PROCESO:                 () => '/en-proceso',

        CREAR_CURSO:                ()   => '/courses/create',
        CURSO_APERTURADO:           (id) => `/courses/information/${id}`,

        USER_ACCOUNT:               (id) => `/user/account/${id}`,
        INFORMACION_USUARIO:        (id) => `/user/information/${id}`,
        ALL_USERS:                  ()   => '/users/all',

        FACTURACION:                (id) => `/billing/${id}`,
        VALIDAR_VOUCHERS:           ()   => '/vouchers/validate',
    */

    const gotoHome      = ()    => { router.push('/') } 
    const gotoLogin     = ()    => { router.push('/auth/login') }
    const gotoRecover   = ()    => { router.push('/auth/recover') } 
    const gotoRegister  = ()    => { router.push('/auth/register') }
    const gotoProfile   = (id)  => { router.push(`/user/information/${id}`) }

    return (
        <RouterContext.Provider
            value={{
                gotoHome,
                gotoLogin,
                gotoRecover,
                gotoRegister,
                gotoProfile,
            }}
        >
            { props.children }    
        </RouterContext.Provider>
    )
}

export default RouterState;
