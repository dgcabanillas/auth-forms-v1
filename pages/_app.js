import React, { useEffect } from 'react';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider }   from '@apollo/client';
import { ThemeProvider }    from '@material-ui/core/styles';
import CssBaseline          from '@material-ui/core/CssBaseline';
import client       from 'config/apollo';
import theme        from 'src/util/theme';
import RouterState  from 'src/context/router/router.state';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }) => {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const Layout = Component.layout || (( props ) => <>{ props.children } </>)

    return (
        <>
        <Head>
            <title> Sistema de Gestión </title>
        </Head>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <RouterState>
                <ApolloProvider client={client}>
                    <SnackbarProvider 
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        autoHideDuration={1000}
                    >
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SnackbarProvider>
                </ApolloProvider>
            </RouterState>
        </ThemeProvider>
        </>
    )
}

export default MyApp;