import React, { useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import MainLayout       from 'components/layout/MainLayout';
import CLink            from 'components/customized/CLink';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';

const Home = () => {
    const { gotoLogin, gotoRegister, gotoRecover } = useContext(RouterContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            { 
                user ? <>
                    <Typography variant="h4" color="initial">
                        Hola <b>{ user.email }</b>.
                    </Typography>
                    <CLink  
                        text='cerrar sesión'
                        onClick={logout}
                        style={{ fontSize: 20 }}
                    />
                </> : <> 
                    <CLink  
                        text='INGRESAR'
                        onClick={gotoLogin}
                        style={{ fontSize: 20 }}
                    />
                    <CLink  
                        text='REGISTRAR'
                        onClick={gotoRegister}
                        style={{ fontSize: 20 }}
                    />
                    <CLink  
                        text='RECUPERAR CUENTA'
                        onClick={gotoRecover}
                        style={{ fontSize: 20 }}
                    />
                </>
            }
        </div>
    )
}

Home.layout = MainLayout;

export default Home;
