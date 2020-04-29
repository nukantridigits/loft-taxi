import {createAction} from 'redux-actions';

export const authRequest = createAction('AUTH_REQUEST'); // логин
export const authSuccess = createAction('AUTH_SUCCESS'); // успешная авторизация
export const authFailure = createAction('AUTH_FAILURE'); // ошибка авторизации/регистрации
export const authLogout = createAction('AUTH_LOGOUT'); // разлогиниться
export const regRequest = createAction('REG_REQUEST'); // регистрация
