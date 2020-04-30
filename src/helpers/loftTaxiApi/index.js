import env from "../../appData/env";

const baseUrl = env.LOFT_TAXI_API_URL;

const urlCreate = (payload, type, isGet) => {
    let url = `${baseUrl}${type}`;

    if (!isGet) {
        return url;
    } else {
        let count = 0;
        let payloadString = '';
        let propsCount = Object.keys(payload).length;

        for (let param in payload) {
            count++;
            if (payload.hasOwnProperty(param)) {
                payloadString += `${param}=${payload[param]}`;
                if (count !== propsCount) {
                    payloadString += '&';
                }
            }
        }

        return `${url}?${payloadString}`;
    }
};

export const request = (type, payload, isGet = false) => {
    const config = {
        method: isGet ? 'GET' : 'POST',
    };

    if (!isGet) {
        config.body = JSON.stringify(payload);
        config.headers = {'Content-Type': 'application/json'}
    }

    const url = urlCreate(payload, type, isGet);

    return fetch(url, config).
            then(response => response.json());
};


/*
const authRequestApi = payload => request(AUTH, payload);

export {authRequestApi};*/
