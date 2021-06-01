import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import RouterContext from './router.context';
import RouterReducer from './router.reducer';

import { SET_TARGET_PATH } from './router.types';

const RouterState = ( props ) => {
    const router = useRouter();

    const initialState = {
        targetPath: '/',
    };

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

    const [state, dispatch] = useReducer( RouterReducer, initialState );

    const setTargetPath = (path) => { dispatch({type: SET_TARGET_PATH, payload: path}) }

    const gotoHome      = ()    => { router.push('/') } 
    const gotoLogin     = ()    => { router.push('/auth/login') }
    const gotoRecover   = ()    => { router.push('/auth/recover') } 
    const gotoRegister  = ()    => { router.push('/auth/register') }
    const gotoProfile   = (id)  => { router.push(`/user/information/${id}`) }
    const gotoTargetPath = ()   => { router.push(state.targetPath) }

    return (
        <RouterContext.Provider
            value={{
                targetPath: state.targetPath,
                setTargetPath,
                gotoHome,
                gotoLogin,
                gotoRecover,
                gotoRegister,
                gotoProfile,
                gotoTargetPath,
            }}
        >
            { props.children }    
        </RouterContext.Provider>
    )
}

export default RouterState;
