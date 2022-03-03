
import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'SING_IN' }
    | { type: 'CHANGE_ICON', payload: string, }
    | { type: 'LOG_OUT', }
    | { type: 'CHANGE_USERNAME', payload: string }

export const authReducer = ( state: AuthState, action: AuthAction) : AuthState => {

    switch (action.type) {
        case 'SING_IN':
            return {
                ...state,
                isLoggeidIn: true,
                userName: 'No user sing in'
            }
        case 'CHANGE_ICON':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggeidIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'CHANGE_USERNAME':
            return{
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }
}