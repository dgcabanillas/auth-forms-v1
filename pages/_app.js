import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider }   from '@apollo/client';
import { makeStyles, ThemeProvider }    from '@material-ui/core/styles';
import CssBaseline          from '@material-ui/core/CssBaseline';
import client       from 'config/apollo';
import theme        from 'src/util/theme';
import RouterState  from 'src/context/router/router.state';
import AuthState    from 'src/context/auth/auth.state';

import 'styles/globals.css';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    snackbar: {
        height: 60, 
        fontSize: '0.85rem',
        fontWeight: 600,
        borderRadius: 5,
        backdropFilter: 'blur(3px)',
    },
    success: { backgroundColor: 'rgb(116 243 137 / 50%)', color: '#135227' },
    error:   { backgroundColor: 'rgb(255   0   0 / 50%)', color: '#450000' },
    warning: { backgroundColor: 'rgb(255 152   0 / 70%)', color: '#623A00' },
    info:    { backgroundColor: 'rgb( 30 132 213 / 70%)', color: '#013773' },
}));

const MyApp = ({ Component, pageProps }) => {

    const classes = useStyles();

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
            <ApolloProvider client={client}>
                <SnackbarProvider 
                    maxSnack={4}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    autoHideDuration={2500}
                    classes={{
                        variantSuccess: clsx(classes.snackbar, classes.success),
                        variantError:   clsx(classes.snackbar, classes.error),
                        variantInfo:    clsx(classes.snackbar, classes.info),
                        variantWarning: clsx(classes.snackbar, classes.warning),
                    }}
                >

                    <AuthState>
                    <RouterState>

                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        
                    </RouterState>
                    </AuthState>

                </SnackbarProvider>
            </ApolloProvider>
        </ThemeProvider>
        </>
    )
}

export default MyApp;