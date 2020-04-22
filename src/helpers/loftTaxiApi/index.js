import env from "../../appData/env";

const baseUrl = env.LOFT_TAXI_API_URL;

export const request = (type, payload) => {
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    };

    return fetch(`${baseUrl}${type}`, config);
};