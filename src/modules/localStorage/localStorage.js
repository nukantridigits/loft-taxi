export const getLocalStorageState = () => {
    if (localStorage.length) {
        let state = localStorage.getItem('state');

        if (state) {
            return JSON.parse(state);
        }

        return {};
    }
};

export const setLocalStorageState = (store) => {
    return localStorage.setItem('state', JSON.stringify(store));
};
