import {createAction} from 'redux-actions';

export const authRequest = createAction('LOFT-TAXI/AUTH/AUTH_REQUEST'); // логин
export const authSuccess = createAction('LOFT-TAXI/AUTH/SUCCESS'); // успешная авторизация
export const authFailure = createAction('LOFT-TAXI/AUTH/FAILURE'); // ошибка авторизации/регистрации
export const authLogout = createAction('LOFT-TAXI/AUTH/LOGOUT'); // разлогиниться
export const regRequest = createAction('LOFT-TAXI/AUTH/REG_REQUEST'); // регистрация
