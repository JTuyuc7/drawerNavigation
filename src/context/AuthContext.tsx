import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir la informacion que se usara
export interface AuthState {
    isLoggeidIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggeidIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

// Interface para los datos que se expondran en el context
export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
    changeIcon: (name: string) => void;
    logOut: () => void;
    changeUserName: (name: string) => void;
}

// crear el context
export const AuthContext = createContext( {} as AuthContextProps);

//exponer el proveedor del estado
export const AuthProvider = ( {children}: any ) => {

    const [ authState, dispatch] = useReducer(authReducer, authInitialState);

    // crear un metodo para disparar la accion de sing in
    const singInF = () => {
        dispatch({
            type: 'SING_IN',
        })
    }

    // Cambiar el icono favorito
    const changeFavIcon = (name:string) => {
        dispatch({
            type: 'CHANGE_ICON',
            payload: name
        })
    }

    const logOutF = () => {
        dispatch({
            type: 'LOG_OUT'
        })
    }

    const changeUserNameF = (name: string ) => {
        dispatch({
            type: 'CHANGE_USERNAME',
            payload: name
        })
    }

    return(
        <AuthContext.Provider
            value={{
                authState: authState,
                singIn: singInF,
                changeIcon: changeFavIcon,
                logOut: logOutF,
                changeUserName: changeUserNameF
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}