import env from "../../appData/env";

const GET = 'GET';
const POST = 'POST';
const baseUrl = env.LOFT_TAXI_API_URL;
const headers = {'Content-Type': 'application/json'};
export const TRANSPORT_ERROR_MSG = 'Не удалось получить данные от сервера: ';

export const auth = request =>
    fetch(`${baseUrl}auth`, {
        method: POST,
        headers: headers,
        body: JSON.stringify(request),
    }).then(response => response.json());

export const reg = request =>
    fetch(`${baseUrl}register`, {
        method: POST,
        headers: headers,
        body: JSON.stringify(request),
    }).then(response => response.json());

export const setCard = request =>
    fetch(`${baseUrl}card`, {
        method: POST,
        headers: headers,
        body: JSON.stringify(request),
    }).then(response => response.json());

export const fetchCard = token =>
    fetch(`${baseUrl}card?token=${token}`, {
        method: GET,
        headers: headers,
    }).then(response => response.json());

export const fetchAddressList = () =>
    fetch(`${baseUrl}addressList`, {
        method: GET,
        headers: headers,
    }).then(response => response.json());

export const fetchRoute = ({addressFrom, addressTo}) =>
    fetch(`${baseUrl}route?address1=${addressFrom}&address2=${addressTo}`, {
        method: GET,
        headers: headers,
    }).then(response => response.json());
