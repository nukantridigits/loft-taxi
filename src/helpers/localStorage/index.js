const STORE_ITEM = 'store';

export const getLocalStorageState = () => {
    if (localStorage.length) {
        let store = localStorage.getItem(STORE_ITEM);

        if (store) {
            return JSON.parse(store);
        }
    }

    return {};
};

export const setLocalStorageState = (store) => {
    return localStorage.setItem(STORE_ITEM, JSON.stringify(store));
};

export const cleanLocalStorageState = () => {
    if (localStorage.length) {
        let store = localStorage.getItem(STORE_ITEM);

        if (store) {
            return localStorage.removeItem(STORE_ITEM);
        }
    }
};
