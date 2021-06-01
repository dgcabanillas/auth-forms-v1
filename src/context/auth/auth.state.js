import React, { useReducer, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';

import {
    LOGIN,
    LOGOUT,
    SET_USER_DATA,
} from './auth.types';

const AuthState = props => {
    
    const initialState = {
        user: null,
        userData: null,
    };

    useEffect(() => {
        if( localStorage ) {
            if (localStorage.getItem('jwtToken')) {
                const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
                if (decodedToken.exp * 1000 < Date.now()) {
                    logout();
                } else {
                    dispatch({type: LOGIN, payload: decodedToken});
                }
            }
        }
    }, []);

    const [state, dispatch] = useReducer( AuthReducer, initialState );

    const login = (token) => {
        localStorage.setItem('jwtToken', token);
        dispatch({
            type: LOGIN,
            payload: jwtDecode(token)
        });
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: LOGOUT });
    }

    const setUserData = data => {dispatch({type: SET_USER_DATA, payload: data})}

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                userData: state.userData,
                login,
                logout,
                setUserData,
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthState;