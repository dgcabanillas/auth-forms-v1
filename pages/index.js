import React, { useContext } from 'react';
import MainLayout   from 'components/layout/MainLayout';
import CLink        from 'components/customized/CLink';
import RouterContext from 'src/context/router/router.context';

const Home = () => {
    const { gotoLogin, gotoRegister, gotoRecover } = useContext(RouterContext)

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        </div>
    )
}

Home.layout = MainLayout;

export default Home;
